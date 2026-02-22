import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

export interface IAuthUser {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUser = signal<IAuthUser | null>(this.loadUser());
  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn = computed(() => this._currentUser() !== null);

  constructor(private router: Router) {}

  private loadUser(): IAuthUser | null {
    try { const s = localStorage.getItem('smarthub_auth'); return s ? JSON.parse(s) : null; }
    catch { return null; }
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const user: IAuthUser = { id: 1, name, email, avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(email)}&backgroundColor=2563eb&textColor=ffffff` };
      this._currentUser.set(user);
      localStorage.setItem('smarthub_auth', JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(name: string, email: string, password: string): boolean {
    if (name && email && password) {
      const user: IAuthUser = { id: Date.now(), name, email, avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=2563eb&textColor=ffffff` };
      this._currentUser.set(user);
      localStorage.setItem('smarthub_auth', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void { this._currentUser.set(null); localStorage.removeItem('smarthub_auth'); this.router.navigate(['/']); }

  updateProfile(updates: Partial<IAuthUser>): void {
    const c = this._currentUser();
    if (c) { const u = { ...c, ...updates }; this._currentUser.set(u); localStorage.setItem('smarthub_auth', JSON.stringify(u)); }
  }
}
