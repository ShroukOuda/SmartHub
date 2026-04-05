import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticProductsService } from '../../../../core/services/static-products';
import { IProduct } from '../../../../core/models/iproduct';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-related-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './related-products.html',
  styleUrl: './related-products.css',
})
export class RelatedProducts  implements OnChanges {
   @Input({ required: true }) product!: IProduct;
  related: IProduct[] = [];

  constructor(private products: StaticProductsService) {}

  ngOnChanges(): void {
    this.related = this.products.getProductsByCategory(this.product.category)
      .filter(p => p.id !== this.product.id)
      .slice(0, 4);
  }

}
