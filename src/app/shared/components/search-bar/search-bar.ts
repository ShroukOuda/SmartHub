import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() searched = new EventEmitter<string>();
  query = signal('');

  constructor(private router: Router) {}

  onSearch(): void {
    const q = this.query().trim();
    if (q) {
      this.searched.emit(q);
      this.router.navigate(['/products'], { queryParams: { search: q } });
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.onSearch();
  }
}