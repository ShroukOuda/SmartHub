import { Injectable, signal } from '@angular/core';
import { IOrder, IShippingInfo, IPaymentInfo } from '../models/iorder';
import { Cart } from '../../cart/services/cart';

@Injectable({ providedIn: 'root' })
export class Order {
  private _orders = signal<IOrder[]>(this.load());
  readonly orders = this._orders.asReadonly();
  readonly lastOrder = signal<IOrder | null>(null);

  constructor(private cart: Cart) {}

  private load(): IOrder[] {
    try { return JSON.parse(localStorage.getItem('orders') || '[]'); }
    catch { return []; }
  }

  placeOrder(shipping: IShippingInfo, payment: IPaymentInfo): IOrder {
    const order: IOrder = {
      id: 'ORD-' + Date.now(),
      items: [...this.cart.items()],
      shipping,
      payment,
      subtotal: this.cart.subtotal(),
      shippingCost: 9.99,
      total: this.cart.total(),
      status: 'confirmed',
      createdAt: new Date()
    };
    this._orders.update(o => [order, ...o]);
    localStorage.setItem('orders', JSON.stringify(this._orders()));
    this.lastOrder.set(order);
    this.cart.clear();
    return order;
  }

  getOrderById(id: string): IOrder | undefined {
    return this._orders().find(o => o.id === id);
  }
}