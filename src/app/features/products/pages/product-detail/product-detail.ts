import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../../core/models/iproduct';
import { Product } from '../../services/product';
import { Cart } from '../../../cart/services/cart';
import { Notification } from '../../../../core/services/notification';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';
import { ProductReviews } from '../../components/product-reviews/product-reviews';
import { RelatedProducts } from '../../components/related-products/related-products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, StarRating, ProductReviews, RelatedProducts],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit {
  product = signal<IProduct | null>(null);
  selectedImage = signal<string>('');
  quantity = signal(1);

  constructor(
    private route: ActivatedRoute,
    private productService: Product,
    private cart: Cart,
    private notify: Notification
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const p = this.productService.getProductById(id);
      if (p) {
        this.product.set(p);
        this.selectedImage.set(p.images[0]);
      }
    });
  }

  addToCart(): void {
    const p = this.product();
    if (p) {
      this.cart.addItem(p, this.quantity());
      this.notify.success(`${p.name} added to cart`);
    }
  }

  increment(): void { if (this.quantity() < (this.product()?.stock ?? 1)) this.quantity.update(q => q + 1); }
  decrement(): void { if (this.quantity() > 1) this.quantity.update(q => q - 1); }
}