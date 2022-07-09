import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VirtaulHatController } from './virtaul_hat.controller';
import { VirtualHat } from './virtual_hat.entity';
import { VirtualHatService } from './virtual_hat.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VirtualHat]),
  ],
  controllers: [VirtaulHatController],
  providers: [VirtualHatService],
})
export class VirtualHatModule {}
