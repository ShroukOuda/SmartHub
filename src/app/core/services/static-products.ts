import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';

@Injectable({ providedIn: 'root' })
export class StaticProducts {

  private products: IProduct[] = [
    { id: 1, name: 'MacBook Pro 14"', price: 1999, originalPrice: 2199,
      description: 'Supercharged by M3 Pro chip. With a stunning Liquid Retina XDR display, all-day battery life and breakthrough performance.',
      shortDescription: 'M3 Pro chip, 14" Liquid Retina XDR, 18GB RAM', category: 'laptops', brand: 'Apple',
      images: ['https://picsum.photos/seed/mbp/600/600'], thumbnail: 'https://picsum.photos/seed/mbp/400/400',
      rating: 4.9, reviewCount: 1248, stock: 12, tags: ['laptop','apple','m3','macbook'], isNew: false, isFeatured: true, discount: 9 },
    { id: 2, name: 'AirPods Pro (3rd Gen)', price: 249, originalPrice: undefined,
      description: 'Active Noise Cancellation up to 2x more powerful. Adaptive Audio seamlessly blends ANC and Transparency mode.',
      shortDescription: 'ANC, Adaptive Audio, USB-C, 30hr battery', category: 'audio', brand: 'Apple',
      images: ['https://picsum.photos/seed/airpods/600/600'], thumbnail: 'https://picsum.photos/seed/airpods/400/400',
      rating: 4.8, reviewCount: 3421, stock: 45, tags: ['earbuds','apple','anc','wireless'], isNew: true, isFeatured: true },
    { id: 3, name: 'Samsung OLED 4K Monitor', price: 799, originalPrice: 999,
      description: '27" OLED QHD display with 240Hz refresh rate. Perfect for gaming and creative work with HDR10+ support.',
      shortDescription: '27" OLED, 240Hz, QHD, HDR10+, USB-C 65W', category: 'monitors', brand: 'Samsung',
      images: ['https://picsum.photos/seed/monitor/600/600'], thumbnail: 'https://picsum.photos/seed/monitor/400/400',
      rating: 4.7, reviewCount: 567, stock: 8, tags: ['monitor','oled','4k','gaming'], isNew: false, isFeatured: true, discount: 20 },
    { id: 4, name: 'Sony WH-1000XM6', price: 349, originalPrice: undefined,
      description: 'Industry-leading noise cancellation with 40-hour battery life. Auto Noise Canceling Optimizer detects your environment.',
      shortDescription: 'Over-ear ANC headphones, 40hr, multipoint', category: 'audio', brand: 'Sony',
      images: ['https://picsum.photos/seed/sony-xm6/600/600'], thumbnail: 'https://picsum.photos/seed/sony-xm6/400/400',
      rating: 4.9, reviewCount: 2187, stock: 30, tags: ['headphones','sony','anc','wireless'], isNew: true, isFeatured: true },
    { id: 5, name: 'Logitech MX Master 4', price: 99, originalPrice: 120,
      description: 'Advanced wireless mouse with MagSpeed electromagnetic scrolling. Works on any surface including glass.',
      shortDescription: 'MagSpeed scroll, 8K DPI, USB-C, multi-device', category: 'accessories', brand: 'Logitech',
      images: ['https://picsum.photos/seed/mx-master/600/600'], thumbnail: 'https://picsum.photos/seed/mx-master/400/400',
      rating: 4.8, reviewCount: 890, stock: 60, tags: ['mouse','logitech','wireless'], isNew: false, isFeatured: false, discount: 17 },
    { id: 6, name: 'Google Pixel 9 Pro', price: 999, originalPrice: undefined,
      description: 'The sharpest Pixel display ever. With Gemini AI built in, real-time translation, and the best Pixel camera.',
      shortDescription: '6.3" OLED, Tensor G4, 50MP triple cam, 7yr updates', category: 'phones', brand: 'Google',
      images: ['https://picsum.photos/seed/pixel9/600/600'], thumbnail: 'https://picsum.photos/seed/pixel9/400/400',
      rating: 4.7, reviewCount: 734, stock: 25, tags: ['phone','google','android','pixel'], isNew: true, isFeatured: false },
    { id: 7, name: 'Keychron Q3 Mechanical', price: 139, originalPrice: 159,
      description: 'Hot-swappable TKL keyboard with aluminum frame. Comes with Gateron G Pro switches and RGB backlight.',
      shortDescription: 'TKL hot-swap, aluminum, Gateron switches, RGB', category: 'accessories', brand: 'Keychron',
      images: ['https://picsum.photos/seed/keyboard/600/600'], thumbnail: 'https://picsum.photos/seed/keyboard/400/400',
      rating: 4.6, reviewCount: 445, stock: 18, tags: ['keyboard','mechanical','rgb'], isNew: false, isFeatured: false, discount: 13 },
    { id: 8, name: 'iPad Pro 13" M4', price: 1299, originalPrice: undefined,
      description: 'Thinnest Apple product ever. Ultra Retina XDR OLED display with Apple Pencil Pro support.',
      shortDescription: '13" OLED, M4, Tandem OLED, Apple Pencil Pro', category: 'tablets', brand: 'Apple',
      images: ['https://picsum.photos/seed/ipad-pro/600/600'], thumbnail: 'https://picsum.photos/seed/ipad-pro/400/400',
      rating: 4.8, reviewCount: 612, stock: 15, tags: ['tablet','apple','ipad','m4'], isNew: false, isFeatured: true },
    { id: 9, name: 'Bose QC Ultra Earbuds', price: 299, originalPrice: 329,
      description: 'World-class noise cancellation with Immersive Audio. CustomTune technology personalizes ANC to your ears.',
      shortDescription: 'CustomTune ANC, Immersive Audio, 6hr+18hr', category: 'audio', brand: 'Bose',
      images: ['https://picsum.photos/seed/bose-qc/600/600'], thumbnail: 'https://picsum.photos/seed/bose-qc/400/400',
      rating: 4.6, reviewCount: 378, stock: 40, tags: ['earbuds','bose','anc'], isNew: false, isFeatured: false, discount: 9 },
    { id: 10, name: 'Samsung Galaxy Tab S9+', price: 899, originalPrice: 999,
      description: 'A new era of Galaxy AI on a stunning 12.4" Dynamic AMOLED 2X display. IP68 water-resistant.',
      shortDescription: '12.4" AMOLED, Snapdragon 8 Gen 2, S Pen included', category: 'tablets', brand: 'Samsung',
      images: ['https://picsum.photos/seed/galaxy-tab/600/600'], thumbnail: 'https://picsum.photos/seed/galaxy-tab/400/400',
      rating: 4.5, reviewCount: 289, stock: 22, tags: ['tablet','samsung','android','s-pen'], isNew: false, isFeatured: false, discount: 10 },
    { id: 11, name: 'ASUS ROG Zephyrus G16', price: 1699, originalPrice: 1899,
      description: 'Gaming laptop with RTX 4080 and Ryzen 9 8945HS. 240Hz QHD OLED Nebula display with DCI-P3 support.',
      shortDescription: 'RTX 4080, Ryzen 9, 240Hz OLED, 32GB DDR5', category: 'laptops', brand: 'ASUS',
      images: ['https://picsum.photos/seed/rog/600/600'], thumbnail: 'https://picsum.photos/seed/rog/400/400',
      rating: 4.7, reviewCount: 198, stock: 6, tags: ['laptop','gaming','asus','rtx'], isNew: true, isFeatured: false, discount: 11 },
    { id: 12, name: 'Microsoft Surface Pro 10', price: 1099, originalPrice: undefined,
      description: '2-in-1 laptop with Intel Core Ultra 7. All-day battery meets enterprise-grade security with NPU-powered AI features.',
      shortDescription: 'Core Ultra 7, 13" PixelSense Flow, 2-in-1, LTE', category: 'laptops', brand: 'Microsoft',
      images: ['https://picsum.photos/seed/surface/600/600'], thumbnail: 'https://picsum.photos/seed/surface/400/400',
      rating: 4.4, reviewCount: 341, stock: 19, tags: ['laptop','tablet','microsoft','2in1'], isNew: false, isFeatured: false },
  ];

  private categories: ICategory[] = [
    { id: 1, name: 'Laptops', slug: 'laptops', description: 'From ultrabooks to gaming powerhouses.', image: 'https://picsum.photos/seed/cat-laptops/600/400', productCount: 22, icon: '💻' },
    { id: 2, name: 'Phones', slug: 'phones', description: 'Flagship smartphones, latest releases.', image: 'https://picsum.photos/seed/cat-phones/600/400', productCount: 18, icon: '📱' },
    { id: 3, name: 'Audio', slug: 'audio', description: 'Headphones, earbuds, and speakers.', image: 'https://picsum.photos/seed/cat-audio/600/400', productCount: 31, icon: '🎧' },
    { id: 4, name: 'Monitors', slug: 'monitors', description: 'Crystal-clear displays for work and play.', image: 'https://picsum.photos/seed/cat-monitors/600/400', productCount: 14, icon: '🖥️' },
    { id: 5, name: 'Tablets', slug: 'tablets', description: 'iPads, Android tablets & e-readers.', image: 'https://picsum.photos/seed/cat-tablets/600/400', productCount: 12, icon: '📲' },
    { id: 6, name: 'Accessories', slug: 'accessories', description: 'Keyboards, mice, cables & more.', image: 'https://picsum.photos/seed/cat-acc/600/400', productCount: 45, icon: '🖱️' },
  ];

  getProducts(): IProduct[] { return this.products; }
  getProductById(id: number): IProduct | undefined { return this.products.find(p => p.id === id); }
  getProductsByCategory(cat: string): IProduct[] { return this.products.filter(p => p.category === cat); }
  getFeaturedProducts(): IProduct[] { return this.products.filter(p => p.isFeatured); }
  getNewArrivals(): IProduct[] { return this.products.filter(p => p.isNew); }
  getCategories(): ICategory[] { return this.categories; }
  getCategoryBySlug(slug: string): ICategory | undefined { return this.categories.find(c => c.slug === slug); }
  searchProducts(query: string): IProduct[] {
    const q = query.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) || p.category.includes(q) || p.brand.toLowerCase().includes(q)
    );
  }
}