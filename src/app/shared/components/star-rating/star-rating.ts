import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() max: number = 5;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get stars(): { full: boolean; half: boolean; empty: boolean }[] {
    return Array.from({ length: this.max }, (_, i) => ({
      full: i + 1 <= Math.floor(this.rating),
      half: i < this.rating && i + 1 > this.rating && (this.rating % 1) >= 0.5,
      empty: i + 1 > Math.ceil(this.rating)
    }));
  }
}
