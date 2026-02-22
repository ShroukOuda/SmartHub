import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(name: string, email: string, message: string): boolean {
    // Simulate form submission
    console.log('Contact form:', { name, email, message });
    return true;
  }
}
