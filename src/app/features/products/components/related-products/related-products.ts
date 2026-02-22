import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticProductsService } from '../../../../core/services/static-products';
import { IProduct } from '../../../../core/models/iproduct';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="related">
      <h2 class="related__title">You might also like</h2>
      <div class="related__grid">
        @for (product of related; track product.id) {
          <app-product-card [product]="product" />
        }
      </div>
    </section>
  `,
  styles: [`
    .related { margin-top: 64px; }
    .related__title { font-size: 20px; font-weight: 500; margin: 0 0 24px; }
    .related__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
  `]
})
export class RelatedProductsComponent implements OnChanges {
  @Input({ required: true }) product!: IProduct;
  related: IProduct[] = [];

  constructor(private products: StaticProductsService) {}

  ngOnChanges(): void {
    this.related = this.products.getProductsByCategory(this.product.category)
      .filter(p => p.id !== this.product.id)
      .slice(0, 4);
  }
}
