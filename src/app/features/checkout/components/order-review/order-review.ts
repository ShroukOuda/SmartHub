import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IShippingInfo, IPaymentInfo } from '../../models/iorder';
import { Cart } from '../../../cart/services/cart';

@Component({
  selector: 'app-order-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-review.html',
  styleUrls: ['./order-review.css']
})
export class OrderReview {
  @Input({ required: true }) shipping!: IShippingInfo;
  @Input({ required: true }) payment!: IPaymentInfo;
  @Output() confirmed = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  constructor(public cart: Cart) {}
  itemTotal(price: number, qty: number): string { return (price * qty).toFixed(2); }
}