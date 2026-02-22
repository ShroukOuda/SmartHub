import { Routes } from '@angular/router';

export const STATIC_ROUTES: Routes = [
  { path: 'faq',      loadComponent: () => import('./pages/faq-page/faq-page').then(m => m.FaqPageComponent) },
  { path: 'shipping', loadComponent: () => import('./pages/shipping-page/shipping-page').then(m => m.ShippingPageComponent) },
  { path: 'returns',  loadComponent: () => import('./pages/returns-page/returns-page').then(m => m.ReturnsPageComponent) },
  { path: 'privacy',  loadComponent: () => import('./pages/privacy-page/privacy-page').then(m => m.PrivacyPageComponent) },
  { path: 'terms',    loadComponent: () => import('./pages/terms-page/terms-page').then(m => m.TermsPageComponent) },
];
