import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  sent = signal(false);
  private fb = inject(FormBuilder);
  private contact = inject(Contact);
  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.valid) {
      this.contact.submit(this.form.value.name!, this.form.value.email!, this.form.value.message!);
      this.sent.set(true);
    }
  }

}

