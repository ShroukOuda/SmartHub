import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../../core/models/iproduct';
import { Cart } from '../../../features/cart/services/cart';
import { NotificationService } from '../../../core/services/notification';
import { StarRatingComponent } from '../star-rating/star-rating';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRatingComponent],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: IProduct;

  constructor(
    private cart: Cart,
    private notify: NotificationService
  ) {}

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cart.addItem(this.product);
    this.notify.success(`${this.product.name} added to cart`);
  }
}
