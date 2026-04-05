import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StaticProductsService } from '../../../../core/services/static-products';
import { IProduct } from '../../../../core/models/iproduct';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-featured-products',
  imports: [CommonModule, RouterLink, ProductCard],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.css',
})
export class FeaturedProducts implements OnInit {
  products: IProduct[] = [];
  private ps = inject(StaticProductsService);
  ngOnInit(): void { this.products = this.ps.getFeaturedProducts(); }
}

