import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from '../../../../features/cart/services/cart';

@Component({
  selector: 'app-cart-icon',
  imports: [RouterLink],
  templateUrl: './cart-icon.html',
  styleUrl: './cart-icon.css',
})
export class CartIcon {
  cart = inject(Cart);
}