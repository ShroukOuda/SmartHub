import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth-guard';

export const USER_ROUTES: Routes = [
  { path: 'login',    loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPageComponent) },
  { path: 'register', loadComponent: () => import('./pages/register-page/register-page').then(m => m.RegisterPageComponent) },
  { path: 'profile',  canActivate: [authGuard], loadComponent: () => import('./pages/profile-page/profile-page').then(m => m.ProfilePageComponent) },
  { path: 'orders',   canActivate: [authGuard], loadComponent: () => import('./pages/orders-page/orders-page').then(m => m.OrdersPageComponent) },
  { path: 'orders/:id', canActivate: [authGuard], loadComponent: () => import('./pages/order-detail-page/order-detail-page').then(m => m.OrderDetailPageComponent) },
  { path: 'wishlist', canActivate: [authGuard], loadComponent: () => import('./pages/wishlist-page/wishlist-page').then(m => m.WishlistPageComponent) },
];
