import { Component } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { CategoriesShowcase } from '../../components/categories-showcase/categories-showcase';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { BrandsShowcase } from '../../components/brands-showcase/brands-showcase';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroBanner, CategoriesShowcase, FeaturedProducts, BrandsShowcase],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}




