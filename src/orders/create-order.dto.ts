import {
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateOrderDto {

  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @IsNotEmpty()
  assignee: string;

}