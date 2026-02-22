import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="static-page">
      <h1>Frequently Asked Questions</h1>
      @for (faq of faqs; track faq.q) {
        <div class="faq-item" [class.faq-item--open]="faq.open">
          <button class="faq-item__q" (click)="faq.open = !faq.open">
            {{ faq.q }}
            <span class="faq-item__icon">{{ faq.open ? '−' : '+' }}</span>
          </button>
          @if (faq.open) { <p class="faq-item__a">{{ faq.a }}</p> }
        </div>
      }
    </div>
  `,
  styles: [`
    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-item__q { display: flex; justify-content: space-between; width: 100%; background: none; border: none; padding: 16px 0; font-size: 15px; font-weight: 500; cursor: pointer; text-align: left; color: var(--text); font-family: inherit; }
    .faq-item__icon { font-size: 20px; color: var(--text-muted); flex-shrink: 0; }
    .faq-item__a { font-size: 14px; color: var(--text-secondary); line-height: 1.7; padding-bottom: 16px; margin: 0; }
  `]
})
export class FaqPageComponent {
  faqs = [
    { q: 'Are all products genuine and authentic?', a: 'Yes. SmartHub is an authorized retailer for all brands we carry. Every product comes with the manufacturer\'s full warranty.', open: false },
    { q: 'How long does shipping take?', a: 'Standard shipping: 3-5 business days. Express: 1-2 days. Free shipping on orders over $100.', open: false },
    { q: 'What is your returns policy?', a: 'We accept returns within 30 days of delivery for items in original, unopened packaging.', open: false },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to 60+ countries. International delivery takes 7-14 business days.', open: false },
    { q: 'How do I track my order?', a: 'A tracking link is emailed after shipment. You can also view status under My Orders in your account.', open: false },
  ];
}
