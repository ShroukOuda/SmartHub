import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="footer-links">
      <div class="footer-links__col">
        <h4>Shop</h4>
        <a routerLink="/products">All Products</a>
        <a [routerLink]="['/products']" [queryParams]="{category: 'laptops'}">Laptops</a>
        <a [routerLink]="['/products']" [queryParams]="{category: 'phones'}">Phones</a>
        <a [routerLink]="['/products']" [queryParams]="{category: 'audio'}">Audio</a>
      </div>
      <div class="footer-links__col">
        <h4>Help</h4>
        <a routerLink="/static/faq">FAQ</a>
        <a routerLink="/static/shipping">Shipping</a>
        <a routerLink="/static/returns">Returns</a>
        <a routerLink="/contact">Contact Us</a>
      </div>
      <div class="footer-links__col">
        <h4>Company</h4>
        <a routerLink="/about">About SmartHub</a>
        <a routerLink="/static/privacy">Privacy Policy</a>
        <a routerLink="/static/terms">Terms of Service</a>
      </div>
    </div>
  `,
  styles: [`
    .footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .footer-links__col { display: flex; flex-direction: column; gap: 10px; }
    .footer-links__col h4 { font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: var(--text); font-weight: 700; margin: 0 0 4px; }
    .footer-links__col a { font-size: 14px; color: var(--text-secondary); text-decoration: none; transition: color .2s; }
    .footer-links__col a:hover { color: var(--primary); }
    @media (max-width: 480px) { .footer-links { grid-template-columns: 1fr 1fr; } }
  `]
})
export class FooterLinksComponent {}
