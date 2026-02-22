import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="wishlist-page">
      <h1>Wishlist</h1>
      <p>Your saved items will appear here. <a routerLink="/products">Continue shopping →</a></p>
    </div>
  `,
  styles: [`
    .wishlist-page { max-width: 800px; margin: 0 auto; padding: 48px 24px; }
    h1 { font-size: 26px; font-weight: 600; margin: 0 0 16px; }
    p { font-size: 14px; color: #888; }
    a { color: #1a1a1a; }
  `]
})
export class WishlistPageComponent {}
