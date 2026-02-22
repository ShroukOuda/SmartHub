import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IShippingInfo } from '../../models/iorder';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shipping-form.html',
  styleUrls: ['./shipping-form.css']
})
export class ShippingFormComponent {
  @Output() submitted = new EventEmitter<IShippingInfo>();
  private fb = inject(FormBuilder);
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', [Validators.required, Validators.email]],
    address:   ['', Validators.required],
    city:      ['', Validators.required],
    zip:       ['', Validators.required],
    country:   ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.valid) this.submitted.emit(this.form.value as IShippingInfo);
    else this.form.markAllAsTouched();
  }
  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
