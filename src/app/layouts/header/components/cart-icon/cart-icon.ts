import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../../../features/cart/services/cart';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/cart" class="cart-icon" aria-label="Cart">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      @if (cart.itemCount() > 0) {
        <span class="cart-icon__badge">{{ cart.itemCount() }}</span>
      }
    </a>
  `,
  styles: [`
    .cart-icon { position: relative; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--border); color: var(--text-secondary); text-decoration: none; transition: all .2s; }
    .cart-icon:hover { background: var(--bg-secondary); color: var(--text); border-color: var(--border-hover); }
    .cart-icon__badge { position: absolute; top: -5px; right: -5px; background: var(--primary); color: #fff; font-size: 10px; font-weight: 700; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid var(--bg-card); }
  `]
})
export class CartIconComponent {
  cart = inject(Cart);
}
