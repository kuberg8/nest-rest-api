import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFile } from 'src/enities/UserFile';
import { Repository } from 'typeorm';

@Injectable()
export class UserFileService {
  constructor(
    @InjectRepository(UserFile)
    private readonly userFileRepository: Repository<UserFile>,
  ) {}

  async getOne(id: number) {
    const userFile = this.userFileRepository.findOne({
      where: { id },
      relations: ['userId'],
    });
    return userFile;
  }

  async getAll() {
    const userFiles = await this.userFileRepository.find({
      relations: ['userId'],
    });
    return userFiles;
  }

  async create(files: UserFile[]) {
    const result = await this.userFileRepository
      .createQueryBuilder()
      .insert()
      .into('user_file')
      .values(files)
      .execute();
    return result;
  }
}
