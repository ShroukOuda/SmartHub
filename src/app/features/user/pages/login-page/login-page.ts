import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1 class="auth-card__title">Sign in</h1>
        <p class="auth-card__sub">Welcome back. <a routerLink="/user/register">Create account →</a></p>
        @if (error()) { <div class="auth-card__error">{{ error() }}</div> }
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="auth-form">
          <div class="field">
            <label>Email</label>
            <input formControlName="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="field">
            <label>Password</label>
            <input formControlName="password" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" class="auth-form__btn" [disabled]="form.invalid">Sign In</button>
        </form>
      </div>
    </div>
  `,
  styles: [`.auth-page{min-height:80vh;display:flex;align-items:center;justify-content:center;padding:24px}.auth-card{width:100%;max-width:400px}.auth-card__title{font-size:28px;font-weight:600;margin:0 0 6px}.auth-card__sub{font-size:14px;color:#888;margin:0 0 28px}.auth-card__sub a{color:#1a1a1a;text-decoration:none;font-weight:500}.auth-card__error{background:#fef5f5;border:1px solid #f9c4c4;border-radius:3px;padding:10px 14px;font-size:14px;color:#d94f3d;margin-bottom:16px}.auth-form{display:flex;flex-direction:column;gap:16px}.field{display:flex;flex-direction:column;gap:6px}.field label{font-size:13px;font-weight:500;color:#555}.field input{padding:10px 12px;border:1px solid #e0e0e0;border-radius:3px;font-size:14px;outline:none;font-family:inherit}.field input:focus{border-color:#1a1a1a}.auth-form__btn{padding:13px;background:#1a1a1a;color:#fff;border:none;border-radius:3px;font-size:14px;font-weight:500;cursor:pointer;margin-top:4px}.auth-form__btn:disabled{opacity:.5}.auth-form__btn:hover:not(:disabled){background:#333}`]
})
export class LoginPageComponent {
  error = signal('');
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.valid) {
      const ok = this.auth.login(this.form.value.email!, this.form.value.password!);
      if (ok) this.router.navigate(['/']); else this.error.set('Invalid credentials.');
    }
  }
}
