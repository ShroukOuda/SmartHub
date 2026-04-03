import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-sorting',
  imports: [FormsModule],
  templateUrl: './product-sorting.html',
  styleUrl: './product-sorting.css',
})
export class ProductSorting {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
}

