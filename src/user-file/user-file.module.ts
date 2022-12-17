import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFile } from 'src/enities/UserFile';
import { UserFileController } from './user-file.controller';
import { UserFileService } from './user-file.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserFile])],
  providers: [UserFileService],
  controllers: [UserFileController],
})
export class UserFileModule {}
