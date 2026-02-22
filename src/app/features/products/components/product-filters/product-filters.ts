import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProductFilters } from '../../services/product';
import { ICategory } from '../../../../core/models/icategory';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <aside class="filters card">
      <div class="filters__group">
        <h3 class="filters__label">Category</h3>
        @for (cat of categories; track cat.id) {
          <label class="filters__option">
            <input type="checkbox" [value]="cat.slug" [checked]="isCategorySelected(cat.slug)" (change)="toggleCategory(cat.slug)" />
            {{ cat.name }}
            <span class="filters__option-count">{{ cat.productCount }}</span>
          </label>
        }
      </div>
      <div class="filters__divider"></div>
      <div class="filters__group">
        <h3 class="filters__label">Price Range</h3>
        <div class="filters__price-row">
          <input class="filters__price-input" type="number" placeholder="Min $" [ngModel]="filters.minPrice" (ngModelChange)="setMin($event)" min="0" />
          <span class="filters__price-sep">–</span>
          <input class="filters__price-input" type="number" placeholder="Max $" [ngModel]="filters.maxPrice" (ngModelChange)="setMax($event)" min="0" />
        </div>
      </div>
      <div class="filters__divider"></div>
      <div class="filters__group">
        <h3 class="filters__label">Brand</h3>
        @for (brand of brands; track brand) {
          <label class="filters__option">
            <input type="checkbox" [value]="brand" [checked]="isBrandSelected(brand)" (change)="toggleBrand(brand)" />
            {{ brand }}
          </label>
        }
      </div>
      <button class="filters__reset" (click)="reset()">Reset All Filters</button>
    </aside>
  `,
  styles: [`
    .filters { padding: 20px; min-width: 220px; max-width: 280px; }
    .filters__group { margin-bottom: 4px; }
    .filters__label { font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--text-muted); margin: 0 0 10px; font-weight: 700; }
    .filters__option { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary); margin-bottom: 8px; cursor: pointer; }
    .filters__option input { accent-color: var(--primary); width: 16px; height: 16px; }
    .filters__option-count { margin-left: auto; font-size: 12px; color: var(--text-muted); }
    .filters__divider { border: none; border-top: 1px solid var(--border); margin: 16px 0; }
    .filters__price-row { display: flex; align-items: center; gap: 8px; }
    .filters__price-input { width: 80px; min-width: 70px; max-width: 100px; padding: 7px 8px; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 13px; outline: none; background: var(--bg-secondary); color: var(--text); }
    .filters__price-input:focus { border-color: var(--primary); }
    .filters__price-sep { font-size: 12px; color: var(--text-muted); }
    .filters__reset { width: 100%; margin-top: 16px; padding: 9px; background: none; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 13px; cursor: pointer; color: var(--text-secondary); transition: all .2s; }
    .filters__reset:hover { border-color: var(--primary); color: var(--primary); }
  `]
})
export class ProductFiltersComponent {
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
