import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner';
import { CategoriesShowcaseComponent } from '../../components/categories-showcase/categories-showcase';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products';
import { BrandsShowcaseComponent } from '../../components/brands-showcase/brands-showcase';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroBannerComponent, CategoriesShowcaseComponent, FeaturedProductsComponent, BrandsShowcaseComponent],
  template: `
    <app-hero-banner />
    <app-brands-showcase />
    <app-categories-showcase />
    <app-featured-products />
  `
})
export class HomePageComponent {}
