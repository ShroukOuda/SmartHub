import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../../core/services/auth';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
})
export class UserMenu {
  open = signal(false);
  auth = inject(Auth);
  toggleOpen(): void { this.open.update(v => !v); }
  logout(): void { this.auth.logout(); this.open.set(false); }
}