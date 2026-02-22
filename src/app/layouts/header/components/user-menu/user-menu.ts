import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="user-menu">
      @if (auth.isLoggedIn()) {
        <button class="user-menu__trigger" (click)="toggleOpen()">
          <img [src]="auth.currentUser()!.avatar" class="user-menu__avatar" [alt]="auth.currentUser()!.name" />
        </button>
        @if (open()) {
          <div class="user-menu__dropdown">
            <div class="user-menu__header">
              <p class="user-menu__name">{{ auth.currentUser()!.name }}</p>
              <p class="user-menu__email">{{ auth.currentUser()!.email }}</p>
            </div>
            <a routerLink="/user/profile"  class="user-menu__item" (click)="open.set(false)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Profile
            </a>
            <a routerLink="/user/orders"   class="user-menu__item" (click)="open.set(false)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3"/><path d="M13 7h8l-2 9H13"/><path d="m9 11-2-7"/></svg>
              Orders
            </a>
            <a routerLink="/user/wishlist" class="user-menu__item" (click)="open.set(false)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Wishlist
            </a>
            <div class="user-menu__divider"></div>
            <button class="user-menu__logout" (click)="logout()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Sign out
            </button>
          </div>
        }
      } @else {
        <a routerLink="/user/login" class="user-menu__login">Sign in</a>
      }
    </div>
  `,
  styles: [`
    .user-menu { position: relative; }
    .user-menu__trigger { background: none; border: none; cursor: pointer; padding: 0; border-radius: 50%; }
    .user-menu__avatar { width: 34px; height: 34px; border-radius: 50%; border: 2px solid var(--border); display: block; }
    .user-menu__login { font-size: 14px; font-weight: 500; color: var(--primary); text-decoration: none; padding: 8px 14px; border: 1px solid var(--primary); border-radius: 6px; transition: all .2s; display: inline-flex; align-items: center; }
    .user-menu__login:hover { background: var(--primary-light); }
    .user-menu__dropdown { position: absolute; right: 0; top: 44px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; box-shadow: var(--shadow-lg); min-width: 200px; padding: 6px; z-index: 100; }
    .user-menu__header { padding: 10px 10px 10px; border-bottom: 1px solid var(--border); margin-bottom: 6px; }
    .user-menu__name { font-size: 13px; font-weight: 600; color: var(--text); margin: 0 0 2px; }
    .user-menu__email { font-size: 12px; color: var(--text-muted); margin: 0; }
    .user-menu__item { display: flex; align-items: center; gap: 8px; padding: 8px 10px; font-size: 14px; color: var(--text-secondary); text-decoration: none; border-radius: 6px; transition: all .15s; }
    .user-menu__item:hover { background: var(--bg-secondary); color: var(--text); }
    .user-menu__divider { border: none; border-top: 1px solid var(--border); margin: 6px 0; }
    .user-menu__logout { display: flex; align-items: center; gap: 8px; width: 100%; padding: 8px 10px; font-size: 14px; color: var(--danger); background: none; border: none; cursor: pointer; border-radius: 6px; transition: background .15s; }
    .user-menu__logout:hover { background: var(--danger-light); }
  `]
})
export class UserMenuComponent {
  open = signal(false);
  auth = inject(AuthService);
  toggleOpen(): void { this.open.update(v => !v); }
  logout(): void { this.auth.logout(); this.open.set(false); }
}
