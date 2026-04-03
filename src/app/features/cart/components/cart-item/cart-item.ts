import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ICartItem } from '../../models/icart-item';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItem {
  @Input({ required: true }) item!: ICartItem;

  constructor(private cart: Cart) {}

  increase(): void { this.cart.updateQuantity(this.item.product.id, this.item.quantity + 1); }
  decrease(): void { this.cart.updateQuantity(this.item.product.id, this.item.quantity - 1); }
  remove(): void { this.cart.removeItem(this.item.product.id); }
}