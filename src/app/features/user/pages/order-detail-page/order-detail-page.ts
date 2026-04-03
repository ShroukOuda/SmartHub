import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Order } from '../../../checkout/services/order';
import { IOrder } from '../../../checkout/models/iorder';

@Component({
  selector: 'app-order-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="order-detail-page">
      @if (order()) {
        <div class="order-detail-page__header">
          <a routerLink="/user/orders" class="order-detail-page__back">← Orders</a>
          <h1>{{ order()!.id }}</h1>
          <span class="status">{{ order()!.status }}</span>
        </div>
        <div class="order-detail-page__grid">
          <div>
            <h3>Items</h3>
            @for (item of order()!.items; track item.product.id) {
              <div class="oi">
                <img [src]="item.product.thumbnail" [alt]="item.product.name" />
                <span>{{ item.product.name }} × {{ item.quantity }}</span>
                <span>\${{ (item.product.price * item.quantity).toFixed(2) }}</span>
              </div>
            }
          </div>
          <div>
            <h3>Shipping</h3>
            <p>{{ order()!.shipping.firstName }} {{ order()!.shipping.lastName }}<br>
               {{ order()!.shipping.address }}<br>
               {{ order()!.shipping.city }}, {{ order()!.shipping.zip }}</p>
            <h3>Total</h3>
            <p>\${{ order()!.total.toFixed(2) }}</p>
          </div>
        </div>
      } @else {
        <p>Order not found.</p>
      }
    </div>
  `,
  styles: [`
    .order-detail-page { max-width: 800px; margin: 0 auto; padding: 48px 24px; }
    .order-detail-page__header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
    .order-detail-page__back { font-size: 14px; color: #888; text-decoration: none; }
    h1 { font-size: 20px; font-weight: 600; margin: 0; }
    .status { padding: 4px 12px; background: #e8f5e9; color: #2e7d32; border-radius: 20px; font-size: 12px; font-weight: 500; }
    .order-detail-page__grid { display: grid; grid-template-columns: 1fr 300px; gap: 40px; }
    @media (max-width: 600px) { .order-detail-page__grid { grid-template-columns: 1fr; } }
    h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.07em; color: #aaa; margin: 0 0 12px; }
    .oi { display: grid; grid-template-columns: 48px 1fr auto; gap: 12px; align-items: center; padding: 8px 0; border-bottom: 1px solid #f8f8f8; font-size: 14px; }
    .oi img { width: 48px; height: 48px; object-fit: cover; border-radius: 2px; }
    p { font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px; }
  `]
})
export class OrderDetailPageComponent implements OnInit {
  order = signal<IOrder | null>(null);
  constructor(private route: ActivatedRoute, private orderService: Order) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      this.order.set(id ? this.orderService.getOrderById(id) ?? null : null);
    });
  }
}
