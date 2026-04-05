export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface INotification {
  id: number;
  message: string;
  type: NotificationType;
}