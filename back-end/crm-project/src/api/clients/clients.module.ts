import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaModule } from '../../database/prisma.module';
import { ClientsRepository } from '../../api/clients/repositories/clients.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository],
})
export class ClientsModule {}
