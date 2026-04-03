import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { IProductFilters } from '../../models/iproduct-filters';
import { IProduct } from '../../../../core/models/iproduct';
import { ICategory } from '../../../../core/models/icategory';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';
import { ProductFilters } from '../../components/product-filters/product-filters';
import { ProductSorting } from '../../components/product-sorting/product-sorting';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductFilters, ProductSorting],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  products = signal<IProduct[]>([]);
  filters  = signal<IProductFilters>({});
  sort     = signal<string>('');
  categories: ICategory[] = [];
  brands: string[] = [];
  showFilters = signal(true);

  constructor(private productService: Product, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.brands     = this.productService.getBrands();

    this.route.queryParams.subscribe(params => {
      const init: IProductFilters = {};
      if (params['search'])   init.search = params['search'];
      if (params['category']) init.category = params['category'];
      this.filters.set(init);
      this.applyFilters();
    });
  }

  applyFilters(): void {
    const f = { ...this.filters(), sort: this.sort() as any };
    this.products.set(this.productService.getFiltered(f));
  }

  onFiltersChange(f: IProductFilters): void { this.filters.set(f); this.applyFilters(); }
  onSortChange(s: string): void             { this.sort.set(s);    this.applyFilters(); }
}