import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-showcase',
  standalone: true,
  template: `
    <section class="brands">
      <p class="brands__label">Official Authorized Retailer</p>
      <div class="brands__list">
        @for (brand of brands; track brand) {
          <span class="brands__item">{{ brand }}</span>
        }
      </div>
    </section>
  `,
  styles: [`
    .brands { background: var(--bg-secondary); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 28px 24px; text-align: center; }
    .brands__label { font-size: 11px; text-transform: uppercase; letter-spacing: .12em; color: var(--text-muted); margin: 0 0 16px; }
    .brands__list { display: flex; justify-content: center; flex-wrap: wrap; gap: 32px; }
    .brands__item { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 17px; font-weight: 700; color: var(--border-hover); letter-spacing: -.02em; transition: color .2s; cursor: default; }
    .brands__item:hover { color: var(--text-secondary); }
  `]
})
export class BrandsShowcaseComponent {
  brands = ['Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Logitech', 'Bose'];
}
