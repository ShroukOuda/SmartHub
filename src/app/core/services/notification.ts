import { Injectable, signal } from '@angular/core';
import { INotification, NotificationType } from '../models/inotification'



@Injectable({ providedIn: 'root' })
export class Notification {
  readonly notifications = signal<INotification[]>([]);
  private counter = 0;

  show(message: string, type: NotificationType = 'info', duration = 3000): void {
    const id = ++this.counter;
    this.notifications.update(n => [...n, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }

  success(message: string) { this.show(message, 'success'); }
  error(message: string) { this.show(message, 'error'); }
  info(message: string) { this.show(message, 'info'); }
  warning(message: string) { this.show(message, 'warning'); }

  dismiss(id: number): void {
    this.notifications.update(n => n.filter(x => x.id !== id));
  }
}