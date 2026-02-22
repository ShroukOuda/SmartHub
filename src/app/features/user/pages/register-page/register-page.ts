import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1 class="auth-card__title">Create account</h1>
        <p class="auth-card__sub">Already have one? <a routerLink="/user/login">Sign in →</a></p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="auth-form">
          <div class="field"><label>Full Name</label><input formControlName="name" placeholder="Jane Smith" /></div>
          <div class="field"><label>Email</label><input formControlName="email" type="email" placeholder="you@example.com" /></div>
          <div class="field"><label>Password</label><input formControlName="password" type="password" placeholder="Min 8 characters" /></div>
          <button type="submit" class="auth-form__btn" [disabled]="form.invalid">Create Account</button>
        </form>
      </div>
    </div>
  `,
  styles: [`.auth-page{min-height:80vh;display:flex;align-items:center;justify-content:center;padding:24px}.auth-card{width:100%;max-width:400px}.auth-card__title{font-size:28px;font-weight:600;margin:0 0 6px}.auth-card__sub{font-size:14px;color:#888;margin:0 0 28px}.auth-card__sub a{color:#1a1a1a;text-decoration:none;font-weight:500}.auth-form{display:flex;flex-direction:column;gap:16px}.field{display:flex;flex-direction:column;gap:6px}.field label{font-size:13px;font-weight:500;color:#555}.field input{padding:10px 12px;border:1px solid #e0e0e0;border-radius:3px;font-size:14px;outline:none;font-family:inherit}.field input:focus{border-color:#1a1a1a}.auth-form__btn{padding:13px;background:#1a1a1a;color:#fff;border:none;border-radius:3px;font-size:14px;font-weight:500;cursor:pointer;margin-top:4px}.auth-form__btn:disabled{opacity:.5}.auth-form__btn:hover:not(:disabled){background:#333}`]
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  form = this.fb.group({
    name:     ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  onSubmit(): void {
    if (this.form.valid) {
      this.auth.register(this.form.value.name!, this.form.value.email!, this.form.value.password!);
      this.router.navigate(['/']);
    }
  }
}
