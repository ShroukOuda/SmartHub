import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductListComponent) },
  { path: ':id', loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetailComponent) }
];
