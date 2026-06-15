import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders =  [
      {
        id: 1,
        labels: ["GST Included"],
        orderId: "NL-010752",
        customerName: "Prasana",
        assignee: "-",
        model: "Series V",
        floor: "G+1",
        delivery: "Standard",
        stage: "Approved",
      },
      {
        id: 2,
        labels: ["Installation Included"],
        orderId: "NL-010751",
        customerName: "Arun",
        assignee: "Kumar",
        model: "Series IV",
        floor: "G+2",
        delivery: "Rapid",
        stage: "Pending",
      },
    ];

    getorders() {
      return this.orders
    }

    createOrder(order){
      order.id = this.orders.length+1
      this.orders.push(order);
      return order;
      
    }
   deleteOrder(id: number) {

  this.orders = this.orders.filter(
    (order) => order.id !== id
  );

  return {
    message: "Order deleted"
  };

} 
  }
