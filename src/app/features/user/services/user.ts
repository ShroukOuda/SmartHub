import { Injectable } from '@angular/core';
import { AuthService } from '../../../core/services/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private auth: AuthService) {}

  updateProfile(name: string, email: string): void {
    this.auth.updateProfile({ name, email });
  }
}
