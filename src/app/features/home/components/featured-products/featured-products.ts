import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticProductsService } from '../../../../core/services/static-products';
import { IProduct } from '../../../../core/models/iproduct';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  template: `
    <section class="featured">
      <div class="featured__header">
        <div>
          <h2 class="featured__title">Featured Products</h2>
          <p class="featured__sub">Hand-picked by our tech experts</p>
        </div>
        <a routerLink="/products" class="btn-ghost">See all →</a>
      </div>
      <div class="featured__grid">
        @for (product of products; track product.id) {
          <app-product-card [product]="product" />
        }
      </div>
    </section>
  `,
  styles: [`
    .featured { max-width: 1280px; margin: 0 auto 80px; padding: 0 24px; }
    .featured__header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; }
    .featured__title { font-size: 24px; font-weight: 700; margin: 0 0 4px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .featured__sub { font-size: 14px; color: var(--text-secondary); margin: 0; }
    .featured__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
  `]
})
export class FeaturedProductsComponent implements OnInit {
  products: IProduct[] = [];
  private ps = inject(StaticProductsService);
  ngOnInit(): void { this.products = this.ps.getFeaturedProducts(); }
}
