import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticProductsService } from '../../../../core/services/static-products';
import { ICategory } from '../../../../core/models/icategory';

@Component({
  selector: 'app-categories-showcase',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories-showcase.html',
  styleUrl: './categories-showcase.css',
})
export class CategoriesShowcase implements OnInit {
  categories: ICategory[] = [];
  private ps = inject(StaticProductsService);
  ngOnInit(): void { this.categories = this.ps.getCategories(); }
}