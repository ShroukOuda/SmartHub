import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../../features/cart/services/cart';

export const cartGuard: CanActivateFn = () => {
  const cart = inject(CartService);
  const router = inject(Router);
  if (cart.itemCount() > 0) return true;
  return router.createUrlTree(['/cart']);
};
