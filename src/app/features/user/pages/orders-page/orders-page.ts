import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Order } from '../../../checkout/services/order';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="orders-page">
      <h1 class="orders-page__title">My Orders</h1>
      @if (orderService.orders().length === 0) {
        <div class="orders-page__empty">
          <p>You haven't placed any orders yet.</p>
          <a routerLink="/products" class="orders-page__cta">Start Shopping</a>
        </div>
      } @else {
        <div class="orders-list">
          @for (order of orderService.orders(); track order.id) {
            <div class="order-row">
              <div class="order-row__meta">
                <span class="order-row__id">{{ order.id }}</span>
                <span class="order-row__date">{{ order.createdAt | date:'mediumDate' }}</span>
              </div>
              <span class="order-row__status order-row__status--{{ order.status }}">{{ order.status }}</span>
              <span class="order-row__total">\${{ order.total.toFixed(2) }}</span>
              <a [routerLink]="['/user/orders', order.id]" class="order-row__link">View →</a>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .orders-page { max-width: 800px; margin: 0 auto; padding: 48px 24px; }
    .orders-page__title { font-size: 26px; font-weight: 600; margin: 0 0 36px; }
    .orders-page__empty { text-align: center; padding: 60px 0; color: #aaa; }
    .orders-page__cta { display: inline-block; margin-top: 16px; padding: 12px 24px; background: #1a1a1a; color: #fff; text-decoration: none; border-radius: 3px; font-size: 14px; }
    .orders-list { display: flex; flex-direction: column; gap: 0; }
    .order-row { display: grid; grid-template-columns: 1fr auto auto auto; gap: 20px; align-items: center; padding: 16px 0; border-bottom: 1px solid #f0f0f0; }
    .order-row__meta { }
    .order-row__id { font-size: 13px; font-weight: 500; color: #1a1a1a; display: block; }
    .order-row__date { font-size: 12px; color: #aaa; }
    .order-row__status { font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 20px; background: #e8f5e9; color: #2e7d32; }
    .order-row__total { font-size: 14px; font-weight: 600; }
    .order-row__link { font-size: 13px; color: #888; text-decoration: none; }
    .order-row__link:hover { color: #1a1a1a; }
  `]
})
export class OrdersPageComponent {
  constructor(public orderService: Order) {}
}
