import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { VirtualHatService } from './virtual_hat.service';
import { VIRTUAL_HAT_SERVICE_NAME, CreateVirtualHatRequest, CreateVirtualHatResponse } from './proto/virtual_hat.pb';
import { CreateVirtualHatRequestDto } from './virtual_hat.dto';

@Controller()
export class VirtaulHatController {
  @Inject(VirtualHatService)
  private readonly service: VirtualHatService;

  @GrpcMethod(VIRTUAL_HAT_SERVICE_NAME, 'CreateVirtualHat')
  private async createVirtualHat(data: CreateVirtualHatRequestDto): Promise<CreateVirtualHatResponse> {
    return this.service.createVirtualHat(data);
  }
}
