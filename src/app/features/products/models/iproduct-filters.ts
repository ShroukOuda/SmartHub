export interface IProductFilters {
  category?: string;
  categories?: string[];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
  brand?: string;
  brands?: string[];
}