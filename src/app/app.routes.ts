import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home-page/home-page').then(m => m.HomePage)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/routes').then(m => m.PRODUCTS_ROUTES)
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/routes').then(m => m.CART_ROUTES)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/routes').then(m => m.CHECKOUT_ROUTES)
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/routes').then(m => m.USER_ROUTES)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/routes').then(m => m.CONTACT_ROUTES)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/pages/about-page/about-page').then(m => m.AboutPageComponent)
  },
  {
    path: 'static',
    loadChildren: () => import('./features/static/routes').then(m => m.STATIC_ROUTES)
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then(m => m.NotFoundComponent)
  }
];
