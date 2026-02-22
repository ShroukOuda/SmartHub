import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../../../shared/components/star-rating/star-rating';

interface IReview {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
}

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  template: `
    <section class="reviews">
      <h2 class="reviews__title">Customer Reviews</h2>
      <div class="reviews__summary">
        <span class="reviews__avg">{{ rating }}</span>
        <app-star-rating [rating]="rating" size="lg" />
        <span class="reviews__count">{{ count }} reviews</span>
      </div>
      <div class="reviews__list">
        @for (review of mockReviews; track review.id) {
          <div class="review">
            <div class="review__header">
              <span class="review__author">{{ review.author }}</span>
              <app-star-rating [rating]="review.rating" size="sm" />
              <span class="review__date">{{ review.date }}</span>
            </div>
            <p class="review__text">{{ review.text }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .reviews { margin-top: 48px; border-top: 1px solid #f0f0f0; padding-top: 40px; }
    .reviews__title { font-size: 18px; font-weight: 500; margin: 0 0 20px; }
    .reviews__summary { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
    .reviews__avg { font-size: 40px; font-weight: 700; color: #1a1a1a; }
    .reviews__count { font-size: 13px; color: #aaa; }
    .reviews__list { display: flex; flex-direction: column; gap: 24px; }
    .review { border-bottom: 1px solid #f8f8f8; padding-bottom: 24px; }
    .review__header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
    .review__author { font-size: 14px; font-weight: 500; color: #1a1a1a; }
    .review__date { font-size: 12px; color: #ccc; margin-left: auto; }
    .review__text { font-size: 14px; color: #555; line-height: 1.6; margin: 0; }
  `]
})
export class ProductReviewsComponent {
  @Input() rating = 0;
  @Input() count = 0;

  mockReviews: IReview[] = [
    { id: 1, author: 'Alex M.', rating: 5, date: 'Jan 2025', text: 'Exceptional quality. Exactly as described, arrived well packaged. Would buy again.' },
    { id: 2, author: 'Sara K.', rating: 4, date: 'Dec 2024', text: 'Very happy with this. The craftsmanship is evident. Minor packaging damage but product is perfect.' },
    { id: 3, author: 'James H.', rating: 5, date: 'Nov 2024', text: 'Looks even better in person. Really elevates the space. Fast shipping too.' },
  ];
}
