import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Order } from '../../../checkout/services/order';

@Component({
  selector: 'app-orders-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.css',
})
export class OrdersPage {
  constructor(public orderService: Order) {}
}
