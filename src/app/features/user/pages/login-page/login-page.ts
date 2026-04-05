import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../../core/services/auth';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  error = signal('');
  private fb = inject(FormBuilder);
  private auth = inject(Auth);
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
