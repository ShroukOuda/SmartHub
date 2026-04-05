import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';
import { IReview } from '../../models/ireview';

@Component({
  selector: 'app-product-reviews',
  imports: [CommonModule, StarRating],
  templateUrl: './product-reviews.html',
  styleUrl: './product-reviews.css',
})
export class ProductReviews {
  @Input() rating = 0;
  @Input() count = 0;

  mockReviews: IReview[] = [
    { id: 1, author: 'Alex M.', rating: 5, date: 'Jan 2025', text: 'Exceptional quality. Exactly as described, arrived well packaged. Would buy again.' },
    { id: 2, author: 'Sara K.', rating: 4, date: 'Dec 2024', text: 'Very happy with this. The craftsmanship is evident. Minor packaging damage but product is perfect.' },
    { id: 3, author: 'James H.', rating: 5, date: 'Nov 2024', text: 'Looks even better in person. Really elevates the space. Fast shipping too.' },
  ];
}
