import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav">
      <a routerLink="/products" routerLinkActive="active" class="nav-link">Shop</a>
      <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
      <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
    </nav>
  `,
  styles: [`
    .main-nav { display: flex; align-items: center; gap: 4px; }
    .nav-link { text-decoration: none; font-size: 14px; font-weight: 500; color: var(--text-secondary); padding: 6px 12px; border-radius: 6px; transition: all .2s; }
    .nav-link:hover { color: var(--text); background: var(--bg-secondary); }
    .nav-link.active { color: var(--primary); background: var(--primary-light); }
    @media (max-width: 600px) { .main-nav { display: none; } }
  `]
})
export class MainNavComponent {}
