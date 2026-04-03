import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';
import { CartItem } from '../../components/cart-item/cart-item';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { EmptyCart } from '../../components/empty-cart/empty-cart';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, CartItem, CartSummary, EmptyCart],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css']
})
export class CartPage {
  constructor(public cart: Cart) {}
}