import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingForm } from '../../components/shipping-form/shipping-form';
import { PaymentForm } from '../../components/payment-form/payment-form';
import { OrderReview } from '../../components/order-review/order-review';
import { OrderConfirmation } from '../../components/order-confirmation/order-confirmation';
import { Order } from '../../services/order';
import { IShippingInfo, IPaymentInfo, IOrder } from '../../models/iorder';

type Step = 'shipping' | 'payment' | 'review' | 'confirmation';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ShippingForm, PaymentForm, OrderReview, OrderConfirmation],
  templateUrl: './checkout-page.html',
  styleUrls: ['./checkout-page.css']
})
export class CheckoutPage {
  step = signal<Step>('shipping');
  shipping = signal<IShippingInfo | null>(null);
  payment  = signal<IPaymentInfo | null>(null);
  order    = signal<IOrder | null>(null);

  steps: Step[] = ['shipping', 'payment', 'review', 'confirmation'];
  labels = { shipping: 'Shipping', payment: 'Payment', review: 'Review', confirmation: 'Done' };

  constructor(private orderService: Order) {}

  stepIndex(s: Step) { return this.steps.indexOf(s); }
  currentIndex()     { return this.steps.indexOf(this.step()); }

  onShipping(info: IShippingInfo)  { this.shipping.set(info); this.step.set('payment'); }
  onPayment(info: IPaymentInfo)    { this.payment.set(info);  this.step.set('review'); }
  onConfirm() {
    const order = this.orderService.placeOrder(this.shipping()!, this.payment()!);
    this.order.set(order);
    this.step.set('confirmation');
  }
  backToPayment() { this.step.set('payment'); }
}