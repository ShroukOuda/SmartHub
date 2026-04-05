import { Injectable } from '@angular/core';
import { StaticProducts } from '../../../core/services/static-products';
import { IProduct } from '../../../core/models/iproduct';
import { IProductFilters } from '../models/iproduct-filters';



@Injectable({ providedIn: 'root' })
export class Product {
  constructor(private staticProducts: StaticProducts) {}

  getFiltered(filters: IProductFilters): IProduct[] {
    let products = this.staticProducts.getProducts();

    // Support both single category and multiple categories
    if (filters.categories?.length)
      products = products.filter(p => filters.categories!.includes(p.category));
    else if (filters.category)
      products = products.filter(p => p.category === filters.category);

    // Support both single brand and multiple brands
    if (filters.brands?.length)
      products = products.filter(p => filters.brands!.includes(p.brand));
    else if (filters.brand)
      products = products.filter(p => p.brand === filters.brand);

    if (filters.search) {
      const q = filters.search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }
    if (filters.minPrice !== undefined)
      products = products.filter(p => p.price >= filters.minPrice!);
    if (filters.maxPrice !== undefined)
      products = products.filter(p => p.price <= filters.maxPrice!);

    switch (filters.sort) {
      case 'price-asc':  products = [...products].sort((a,b) => a.price - b.price); break;
      case 'price-desc': products = [...products].sort((a,b) => b.price - a.price); break;
      case 'rating':     products = [...products].sort((a,b) => b.rating - a.rating); break;
      case 'newest':     products = [...products].filter(p => p.isNew); break;
    }
    return products;
  }

  getProductById(id: number) { return this.staticProducts.getProductById(id); }
  getCategories()            { return this.staticProducts.getCategories(); }
  getBrands(): string[]      { return [...new Set(this.staticProducts.getProducts().map(p => p.brand))]; }
}