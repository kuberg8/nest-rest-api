import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository /*, UpdateResult */ } from 'typeorm';
import { User } from 'src/enities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(user: User): Promise<void> {
    await this.usersRepository.save(user);
  }

  // update(user: User, id: string): Promise<UpdateResult> {
  //   return this.usersRepository.update(id, user);
  // }
  update(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
}
