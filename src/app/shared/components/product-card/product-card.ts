import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../../core/models/iproduct';
import { Cart } from '../../../features/cart/services/cart';
import { Notification } from '../../../core/services/notification';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink, StarRating],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: IProduct;

  constructor(
    private cart: Cart,
    private notify: Notification
  ) {}

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cart.addItem(this.product);
    this.notify.success(`${this.product.name} added to cart`);
  }
}