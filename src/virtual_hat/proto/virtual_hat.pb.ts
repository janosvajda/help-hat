/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';

export const protobufPackage = 'virtual_hat';

export interface CreateVirtualHatRequest {
  value: number;
  userId: number;
}

export interface CreateVirtualHatResponse {
  status: number;
  error: string[];
  id: number;
}

export const VIRTUAL_HAT_PACKAGE_NAME = 'virtual_hat';

export interface VirtualHatServiceClient {
  createVirtualHat(request: CreateVirtualHatRequest): Observable<CreateVirtualHatResponse>;
}

export interface VirtualHatServiceController {
  createVirtualHat(request: CreateVirtualHatRequest): Promise<CreateVirtualHatResponse> | Observable<CreateVirtualHatResponse> | CreateVirtualHatResponse;
}

export function VirtaulHatServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createVirtualHat'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('VirtualHatService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('VirtualHatService', method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const VIRTUAL_HAT_SERVICE_NAME = 'VirtualHatService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
