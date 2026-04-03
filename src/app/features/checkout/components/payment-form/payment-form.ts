import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IPaymentInfo } from '../../models/iorder';

@Component({
  selector: 'app-payment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-form.html',
  styleUrls: ['../shipping-form/shipping-form.css']
})
export class PaymentForm {
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
