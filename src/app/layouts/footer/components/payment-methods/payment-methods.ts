import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  imports: [],
  templateUrl: './payment-methods.html',
  styleUrl: './payment-methods.css',
})
export class PaymentMethods {
  methods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];
}