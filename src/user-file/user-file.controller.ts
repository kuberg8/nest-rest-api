import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { UserFileService } from './user-file.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileName, imgFilter } from 'src/utils/multer/imgUpdate.utils';
import { UserFile } from 'src/enities/UserFile';

@Controller('file')
export class UserFileController {
  constructor(private readonly userFileService: UserFileService) {}

  @Get()
  getAll(): string {
    return 'this.userService.findAll()';
  }

  @Post('/:userId')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './img',
        filename: fileName,
      }),
      fileFilter: imgFilter,
    }),
  )
  async uploadedFile(@UploadedFiles() files, @Param('userId') userId: number) {
    const response = [];

    files.forEach(async (file) => {
      const userFile = new UserFile();

      userFile.name = file.filename;
      userFile.url = file.path;
      userFile.type = file.mimetype;
      userFile.size = file.size;
      userFile.userId = userId;
      console.log(file);

      response.push(userFile);
    });

    return await this.userFileService.create(response);
  }
}
