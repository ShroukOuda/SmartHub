import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="cart-summary card">
      <h2 class="cart-summary__title">Order Summary</h2>
      <div class="cart-summary__row">
        <span>Subtotal</span><span>\${{ cart.subtotal().toFixed(2) }}</span>
      </div>
      <div class="cart-summary__row">
        <span>Shipping</span>
        <span>{{ cart.subtotal() >= 100 ? 'Free' : (cart.subtotal() > 0 ? '\$9.99' : '—') }}</span>
      </div>
      @if (cart.subtotal() < 100 && cart.subtotal() > 0) {
        <div class="cart-summary__free-ship">
          Add <strong>\${{ (100 - cart.subtotal()).toFixed(2) }}</strong> more for free shipping
        </div>
      }
      <div class="cart-summary__divider"></div>
      <div class="cart-summary__row cart-summary__row--total">
        <span>Total</span><span>\${{ cart.total().toFixed(2) }}</span>
      </div>
      <a routerLink="/checkout" class="btn-primary" style="width:100%;margin-top:16px;justify-content:center;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        Proceed to Checkout
      </a>
      <a routerLink="/products" class="cart-summary__continue">Continue shopping</a>
    </div>
  `,
  styles: [`
    .cart-summary { padding: 24px; }
    .cart-summary__title { font-size: 16px; font-weight: 700; margin: 0 0 20px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .cart-summary__row { display: flex; justify-content: space-between; font-size: 14px; color: var(--text-secondary); margin-bottom: 10px; }
    .cart-summary__row--total { font-size: 17px; font-weight: 700; color: var(--text); }
    .cart-summary__free-ship { font-size: 12px; color: var(--success); background: var(--success-light); padding: 8px 12px; border-radius: var(--radius-sm); margin: 4px 0 8px; }
    .cart-summary__divider { border: none; border-top: 1px solid var(--border); margin: 14px 0; }
    .cart-summary__continue { display: block; text-align: center; color: var(--text-muted); font-size: 13px; text-decoration: none; margin-top: 12px; }
    .cart-summary__continue:hover { color: var(--text); text-decoration: underline; }
  `]
})
export class CartSummaryComponent {
  cart = inject(CartService);
}
