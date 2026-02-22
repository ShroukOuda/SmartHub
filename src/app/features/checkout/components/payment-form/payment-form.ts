import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IPaymentInfo } from '../../models/iorder';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="checkout-form">
      <h2 class="checkout-form__section">Payment Details</h2>
      <div class="field" [class.field--error]="isInvalid('cardHolder')">
        <label>Name on Card</label>
        <input formControlName="cardHolder" placeholder="Jane Smith" />
        @if (isInvalid('cardHolder')) { <span class="field__error">Required</span> }
      </div>
      <div class="field" [class.field--error]="isInvalid('cardNumber')">
        <label>Card Number</label>
        <input formControlName="cardNumber" placeholder="•••• •••• •••• ••••" maxlength="19" />
      </div>
      <div class="checkout-form__row">
        <div class="field">
          <label>Expiry</label>
          <input formControlName="expiry" placeholder="MM / YY" maxlength="7" />
        </div>
        <div class="field">
          <label>CVC</label>
          <input formControlName="cvc" placeholder="•••" maxlength="3" type="password" />
        </div>
      </div>
      <button type="submit" class="checkout-form__btn">Review Order →</button>
    </form>
  `,
  styleUrls: ['../shipping-form/shipping-form.css']
})
export class PaymentFormComponent {
  @Output() submitted = new EventEmitter<IPaymentInfo>();
  private fb = inject(FormBuilder);
  form = this.fb.group({
    cardHolder: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
    expiry:     ['', Validators.required],
    cvc:        ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.valid) {
      const raw = this.form.value.cardNumber!.replace(/\D/g, '');
      this.submitted.emit({ cardHolder: this.form.value.cardHolder!, last4: raw.slice(-4), method: 'card' });
    } else {
      this.form.markAllAsTouched();
    }
  }
  isInvalid(f: string): boolean {
    const c = this.form.get(f);
    return !!(c?.invalid && c?.touched);
  }
}
