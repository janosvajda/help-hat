import { HttpStatus, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientGrpc } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { firstValueFrom } from 'rxjs';
import { VirtualHat } from './virtual_hat.entity';
import { CreateVirtualHatRequest, CreateVirtualHatResponse } from './proto/virtual_hat.pb';

@Injectable()
export class VirtualHatService implements OnModuleInit {

  @InjectRepository(VirtualHat)
  private readonly repository: Repository<VirtualHat>;

  public onModuleInit(): void {}

  public async createVirtualHat(data: CreateVirtualHatRequest): Promise<CreateVirtualHatResponse> {
    const vh: VirtualHat = new VirtualHat();
    vh.value = data.value;
    vh.userId = data.userId;
    await this.repository.save(vh);
    return { id: vh.id, error: null, status: HttpStatus.OK };
  }
}
