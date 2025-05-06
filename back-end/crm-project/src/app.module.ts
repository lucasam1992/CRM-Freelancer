import { Module } from '@nestjs/common';
import { UsersController } from './api/users/users.controller';
import { UsersService } from './api/users/users.service';
import { UsersRepository } from './api/users/repositories/users.repository';
import { PrismaService } from './database/prisma.service';
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
})
export class AppModule {}
