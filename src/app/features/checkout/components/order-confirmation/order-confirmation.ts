import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IOrder } from '../../models/iorder';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="confirmation">
      <div class="confirmation__check">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h1 class="confirmation__title">Order Confirmed!</h1>
      <p class="confirmation__id">{{ order.id }}</p>
      <p class="confirmation__msg">Thank you! Your order is confirmed. We'll send shipping updates to <strong>{{ order.shipping.email }}</strong>.</p>
      <div class="confirmation__actions">
        <a routerLink="/user/orders" class="btn-primary">View Orders</a>
        <a routerLink="/products" class="confirmation__link">Continue Shopping →</a>
      </div>
    </div>
  `,
  styles: [`
    .confirmation { text-align: center; padding: 60px 20px; }
    .confirmation__check { width: 70px; height: 70px; background: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
    .confirmation__title { font-size: 28px; font-weight: 700; margin: 0 0 8px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .confirmation__id { font-size: 13px; color: var(--text-muted); margin: 0 0 20px; font-family: monospace; }
    .confirmation__msg { font-size: 15px; color: var(--text-secondary); line-height: 1.6; max-width: 440px; margin: 0 auto 32px; }
    .confirmation__actions { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .confirmation__link { color: var(--text-muted); font-size: 14px; text-decoration: none; }
    .confirmation__link:hover { color: var(--text); text-decoration: underline; }
  `]
})
export class OrderConfirmationComponent {
  @Input({ required: true }) order!: IOrder;
}
