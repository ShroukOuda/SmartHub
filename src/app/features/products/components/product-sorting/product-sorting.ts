import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-sorting',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="sorting">
      <label class="sorting__label">Sort:</label>
      <select class="sorting__select" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
        <option value="">Featured</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="rating">Best Rated</option>
        <option value="newest">New Arrivals</option>
      </select>
    </div>
  `,
  styles: [`
    .sorting { display: flex; align-items: center; gap: 8px; }
    .sorting__label { font-size: 13px; color: var(--text-muted); white-space: nowrap; }
    .sorting__select { padding: 7px 10px; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 13px; font-family: inherit; outline: none; background: var(--bg-secondary); color: var(--text); cursor: pointer; }
    .sorting__select:focus { border-color: var(--primary); }
  `]
})
export class ProductSortingComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
}
