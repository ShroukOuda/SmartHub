import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="empty-cart">
      <div class="empty-cart__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </div>
      <h2 class="empty-cart__title">Your cart is empty</h2>
      <p class="empty-cart__text">Looks like you haven't added anything yet.</p>
      <a routerLink="/products" class="btn-primary">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        Start Shopping
      </a>
    </div>
  `,
  styles: [`
    .empty-cart { display: flex; flex-direction: column; align-items: center; padding: 80px 20px; text-align: center; }
    .empty-cart__icon { width: 80px; height: 80px; background: var(--bg-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); margin-bottom: 24px; }
    .empty-cart__title { font-size: 22px; font-weight: 700; color: var(--text); margin: 0 0 8px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .empty-cart__text { color: var(--text-secondary); margin: 0 0 32px; font-size: 15px; }
  `]
})
export class EmptyCartComponent {}
