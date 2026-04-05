import { Routes } from '@angular/router';

export const STATIC_ROUTES: Routes = [
  { path: 'faq',      loadComponent: () => import('./pages/faq-page/faq-page').then(m => m.FaqPage) },
  { path: 'shipping', loadComponent: () => import('./pages/shipping-page/shipping-page').then(m => m.ShippingPage) },
  { path: 'returns',  loadComponent: () => import('./pages/returns-page/returns-page').then(m => m.ReturnsPage) },
  { path: 'privacy',  loadComponent: () => import('./pages/privacy-page/privacy-page').then(m => m.PrivacyPage) },
  { path: 'terms',    loadComponent: () => import('./pages/terms-page/terms-page').then(m => m.TermsPage) },
];
