import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProductFilters } from '../../models/iproduct-filters';
import { ICategory } from '../../../../core/models/icategory';

@Component({
  selector: 'app-product-filters',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filters.html',
  styleUrl: './product-filters.css',
})
export class ProductFilters {
  @Input() filters: IProductFilters = {};
  @Input() categories: ICategory[] = [];
  @Input() brands: string[] = [];
  @Output() filtersChange = new EventEmitter<IProductFilters>();

  // Category multi-select
  isCategorySelected(slug: string): boolean {
    return this.filters.categories?.includes(slug) ?? false;
  }

  toggleCategory(slug: string) {
    const current = this.filters.categories ?? [];
    const updated = current.includes(slug)
      ? current.filter(c => c !== slug)
      : [...current, slug];
    this.emit({ categories: updated.length ? updated : undefined });
  }

  // Brand multi-select
  isBrandSelected(brand: string): boolean {
    return this.filters.brands?.includes(brand) ?? false;
  }

  toggleBrand(brand: string) {
    const current = this.filters.brands ?? [];
    const updated = current.includes(brand)
      ? current.filter(b => b !== brand)
      : [...current, brand];
    this.emit({ brands: updated.length ? updated : undefined });
  }

  setMin(v: number) { this.emit({ minPrice: v || undefined }); }
  setMax(v: number) { this.emit({ maxPrice: v || undefined }); }
  reset() { this.filtersChange.emit({}); }
  private emit(patch: Partial<IProductFilters>) { this.filtersChange.emit({ ...this.filters, ...patch }); }
}




