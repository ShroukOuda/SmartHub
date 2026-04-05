import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth';
import { NotificationService } from '../../../../core/services/notification';

@Component({
  selector: 'app-profile-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit {
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
