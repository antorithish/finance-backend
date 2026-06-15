import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('api/orders')
  getOrders() {
    return [
      {
        id: 1,
        orderId: 'NL-010752',
        customerName: 'Prasana',
        assignee: '-',
      },
      {
        id: 2,
        orderId: 'NL-010751',
        customerName: 'Arun',
        assignee: 'Kumar',
      },
    ];
  }

}