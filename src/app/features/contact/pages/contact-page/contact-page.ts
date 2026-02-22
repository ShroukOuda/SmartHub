import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-page">
      <div class="contact-page__header">
        <h1>Get in Touch</h1>
        <p>Questions, feedback, or just want to say hello. We read everything.</p>
      </div>
      <div class="contact-page__layout">
        <div class="contact-info">
          <div class="contact-info__item"><strong>Email</strong><span>hello&#64;smarthub.io</span></div>
          <div class="contact-info__item"><strong>Phone</strong><span>+44 20 7946 0123</span></div>
          <div class="contact-info__item"><strong>Hours</strong><span>Mon–Fri, 9am–6pm GMT</span></div>
          <div class="contact-info__item"><strong>Address</strong><span>14 Clerkenwell Rd<br>London EC1M 5PQ</span></div>
        </div>
        @if (sent()) {
          <div class="contact-page__success">
            <span>✓</span>
            <p>Message sent! We'll reply within 1 business day.</p>
          </div>
        } @else {
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="field">
              <label>Name</label>
              <input formControlName="name" placeholder="Your name" />
            </div>
            <div class="field">
              <label>Email</label>
              <input formControlName="email" type="email" placeholder="you@example.com" />
            </div>
            <div class="field">
              <label>Message</label>
              <textarea formControlName="message" rows="5" placeholder="Tell us what's on your mind..."></textarea>
            </div>
            <button type="submit" [disabled]="form.invalid">Send Message</button>
          </form>
        }
      </div>
    </div>
  `,
  styles: [`
    .contact-page { max-width: 900px; margin: 0 auto; padding: 48px 24px; }
    .contact-page__header { margin-bottom: 48px; }
    .contact-page__header h1 { font-size: 32px; font-weight: 600; margin: 0 0 8px; }
    .contact-page__header p { font-size: 16px; color: #888; margin: 0; }
    .contact-page__layout { display: grid; grid-template-columns: 250px 1fr; gap: 60px; }
    @media (max-width: 600px) { .contact-page__layout { grid-template-columns: 1fr; } }
    .contact-info { display: flex; flex-direction: column; gap: 20px; }
    .contact-info__item { display: flex; flex-direction: column; gap: 2px; }
    .contact-info__item strong { font-size: 12px; text-transform: uppercase; letter-spacing: .07em; color: #aaa; }
    .contact-info__item span { font-size: 14px; color: #333; line-height: 1.5; }
    .contact-form { display: flex; flex-direction: column; gap: 16px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field label { font-size: 13px; font-weight: 500; color: #555; }
    .field input, .field textarea { padding: 10px 12px; border: 1px solid #e0e0e0; border-radius: 3px; font-size: 14px; outline: none; font-family: inherit; resize: vertical; }
    .field input:focus, .field textarea:focus { border-color: #1a1a1a; }
    button[type="submit"] { padding: 13px; background: #1a1a1a; color: #fff; border: none; border-radius: 3px; font-size: 14px; font-weight: 500; cursor: pointer; }
    button:disabled { opacity: .5; cursor: default; }
    button:hover:not(:disabled) { background: #333; }
    .contact-page__success { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 60px; text-align: center; }
    .contact-page__success span { font-size: 40px; }
    .contact-page__success p { font-size: 16px; color: #555; margin: 0; }
  `]
})
export class ContactPageComponent {
  sent = signal(false);
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.valid) {
      this.contactService.submit(this.form.value.name!, this.form.value.email!, this.form.value.message!);
      this.sent.set(true);
    }
  }
}
