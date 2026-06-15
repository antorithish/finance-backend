import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

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