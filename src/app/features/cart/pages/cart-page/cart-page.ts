import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { CartItemComponent } from '../../components/cart-item/cart-item';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary';
import { EmptyCartComponent } from '../../components/empty-cart/empty-cart';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, CartItemComponent, CartSummaryComponent, EmptyCartComponent],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPageComponent {
  constructor(public cart: CartService) {}
}
