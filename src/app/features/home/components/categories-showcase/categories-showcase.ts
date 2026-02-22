import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticProductsService } from '../../../../core/services/static-products';
import { ICategory } from '../../../../core/models/icategory';

@Component({
  selector: 'app-categories-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="categories">
      <div class="categories__header">
        <div>
          <h2 class="categories__title">Browse Categories</h2>
          <p class="categories__sub">Find exactly what you're looking for</p>
        </div>
        <a routerLink="/products" class="btn-ghost">View all →</a>
      </div>
      <div class="categories__grid">
        @for (cat of categories; track cat.id) {
          <a [routerLink]="['/products']" [queryParams]="{category: cat.slug}" class="cat-card">
            <span class="cat-card__icon">{{ cat.icon }}</span>
            <div class="cat-card__body">
              <span class="cat-card__name">{{ cat.name }}</span>
              <span class="cat-card__count">{{ cat.productCount }} products</span>
            </div>
            <svg class="cat-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        }
      </div>
    </section>
  `,
  styles: [`
    .categories { max-width: 1280px; margin: 80px auto; padding: 0 24px; }
    .categories__header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; }
    .categories__title { font-size: 24px; font-weight: 700; margin: 0 0 4px; font-family: 'Plus Jakarta Sans', sans-serif; }
    .categories__sub { font-size: 14px; color: var(--text-secondary); margin: 0; }
    .categories__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
    .cat-card { display: flex; align-items: center; gap: 12px; padding: 16px 18px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); text-decoration: none; transition: all .2s; }
    .cat-card:hover { border-color: var(--primary); box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .cat-card__icon { font-size: 26px; flex-shrink: 0; }
    .cat-card__body { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .cat-card__name { font-size: 14px; font-weight: 600; color: var(--text); }
    .cat-card__count { font-size: 12px; color: var(--text-muted); }
    .cat-card__arrow { color: var(--text-muted); transition: transform .2s; flex-shrink: 0; }
    .cat-card:hover .cat-card__arrow { transform: translateX(4px); color: var(--primary); }
  `]
})
export class CategoriesShowcaseComponent implements OnInit {
  categories: ICategory[] = [];
  private ps = inject(StaticProductsService);
  ngOnInit(): void { this.categories = this.ps.getCategories(); }
}
