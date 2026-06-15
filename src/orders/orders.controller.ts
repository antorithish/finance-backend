import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto} from './create-order.dto';
import {Delete,Param, Body,Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService : OrdersService,){}

@Get()
getOrders(){
    return this.ordersService.getorders();

}

@Post()
createOrder(
    @Body() createOrderDto,
) {

  return this.ordersService.createOrder(
    createOrderDto
  );

}
@Delete(':id')
deleteOrder(
  @Param('id') id: string,
) {

  return this.ordersService.deleteOrder(
    Number(id)
  );

}
}