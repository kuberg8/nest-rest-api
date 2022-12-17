import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/enities/User';
// import { UpdateResult } from 'typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: User): void {
    this.userService.create(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.userService.remove(id);
  }

  // @Put(':id')
  // update(@Body() user: User, @Param('id') id: number): Promise<UpdateResult> {
  //   return this.userService.update(user, id);
  // }
  @Put()
  update(@Body() user: User): Promise<User> {
    return this.userService.update(user);
  }
}
