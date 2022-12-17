import { Test, TestingModule } from '@nestjs/testing';
import { UserFileController } from './user-file.controller';

describe('UserFileController', () => {
  let controller: UserFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFileController],
    }).compile();

    controller = module.get<UserFileController>(UserFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
