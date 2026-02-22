import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth';
import { NotificationService } from '../../../../core/services/notification';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="profile-page">
      <h1 class="profile-page__title">My Profile</h1>
      @if (auth.currentUser(); as user) {
        <div class="profile-page__layout">
          <div class="profile-page__avatar-section">
            <img [src]="user.avatar" [alt]="user.name" class="profile-page__avatar" />
            <p class="profile-page__name">{{ user.name }}</p>
            <p class="profile-page__email-display">{{ user.email }}</p>
          </div>
          <form [formGroup]="form" (ngSubmit)="save()" class="auth-form">
            <div class="field"><label>Full Name</label><input formControlName="name" /></div>
            <div class="field"><label>Email</label><input formControlName="email" type="email" /></div>
            <button type="submit" class="auth-form__btn">Save Changes</button>
          </form>
        </div>
      }
    </div>
  `,
  styles: [`.profile-page{max-width:700px;margin:0 auto;padding:48px 24px}.profile-page__title{font-size:26px;font-weight:600;margin:0 0 36px}.profile-page__layout{display:grid;grid-template-columns:200px 1fr;gap:48px;align-items:start}@media(max-width:600px){.profile-page__layout{grid-template-columns:1fr}}.profile-page__avatar{width:80px;height:80px;border-radius:50%;border:1px solid #e0e0e0;display:block;margin-bottom:12px}.profile-page__name{font-size:15px;font-weight:600;margin:0 0 4px}.profile-page__email-display{font-size:13px;color:#aaa;margin:0}.auth-form{display:flex;flex-direction:column;gap:16px}.field{display:flex;flex-direction:column;gap:6px}.field label{font-size:13px;font-weight:500;color:#555}.field input{padding:10px 12px;border:1px solid #e0e0e0;border-radius:3px;font-size:14px;outline:none;font-family:inherit}.field input:focus{border-color:#1a1a1a}.auth-form__btn{padding:12px;background:#1a1a1a;color:#fff;border:none;border-radius:3px;font-size:14px;font-weight:500;cursor:pointer}.auth-form__btn:hover{background:#333}`]
})
export class ProfilePageComponent implements OnInit {
  public auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private notify = inject(NotificationService);
  form!: FormGroup;

  ngOnInit(): void {
    const user = this.auth.currentUser();
    this.form = this.fb.group({ name: [user?.name || ''], email: [user?.email || ''] });
  }
  save(): void {
    this.auth.updateProfile({ name: this.form.value.name!, email: this.form.value.email! });
    this.notify.success('Profile updated');
  }
}
