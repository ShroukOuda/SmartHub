import { Injectable, signal, computed } from '@angular/core';
import { ICartItem } from '../models/icart-item';
import { IProduct } from '../../../core/models/iproduct';

@Injectable({ providedIn: 'root' })
export class Cart {
  private _items = signal<ICartItem[]>(this.load());
  readonly items = this._items.asReadonly();
  readonly itemCount = computed(() => this._items().reduce((s, i) => s + i.quantity, 0));
  readonly subtotal = computed(() => this._items().reduce((s, i) => s + i.product.price * i.quantity, 0));
  readonly total = computed(() => this.subtotal() + (this.subtotal() > 0 ? 9.99 : 0));

  private load(): ICartItem[] {
    try { return JSON.parse(localStorage.getItem('cart') || '[]'); }
    catch { return []; }
  }

  private save(): void {
    localStorage.setItem('cart', JSON.stringify(this._items()));
  }

  addItem(product: IProduct, quantity = 1): void {
    this._items.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id
          ? { ...i, quantity: i.quantity + quantity }
          : i
        );
      }
      return [...items, { product, quantity }];
    });
    this.save();
  }

  removeItem(productId: number): void {
    this._items.update(items => items.filter(i => i.product.id !== productId));
    this.save();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) { this.removeItem(productId); return; }
    this._items.update(items =>
      items.map(i => i.product.id === productId ? { ...i, quantity } : i)
    );
    this.save();
  }

  clear(): void {
    this._items.set([]);
    localStorage.removeItem('cart');
  }
}