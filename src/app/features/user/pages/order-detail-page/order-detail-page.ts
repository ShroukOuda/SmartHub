import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Order } from '../../../checkout/services/order';
import { IOrder } from '../../../checkout/models/iorder';

@Component({
  selector: 'app-order-detail-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './order-detail-page.html',
  styleUrl: './order-detail-page.css',
})
export class OrderDetailPage implements OnInit {
  order = signal<IOrder | null>(null);
  constructor(private route: ActivatedRoute, private orderService: Order) {}
  ngOnInit(): void {
  this.route.paramMap.subscribe(p => {
    const id = p.get('id');
    this.order.set(id ? this.orderService.getOrderById(id) ?? null : null);
  });
  }

}

