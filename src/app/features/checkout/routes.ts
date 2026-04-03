import { Routes } from '@angular/router';
import { cartGuard } from '../../core/guards/cart-guard';

export const CHECKOUT_ROUTES: Routes = [
  {
    path: '',
    canActivate: [cartGuard],
    loadComponent: () => import('./pages/checkout-page/checkout-page').then(m => m.CheckoutPage)
  }
];
