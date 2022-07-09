import { IsNumber, Min } from 'class-validator';
import { CreateVirtualHatRequest} from './proto/virtual_hat.pb';

export class CreateVirtualHatRequestDto implements CreateVirtualHatRequest {

  @IsNumber()
  public value: number;

  @IsNumber()
  public userId: number;
}
