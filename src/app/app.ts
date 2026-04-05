import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header/header';
import { Footer } from './layouts/footer/footer/footer';
import { CommonModule } from '@angular/common';
import { Notification } from './core/services/notification';
import { Theme } from './core/services/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  notifications = inject(Notification);
  private theme = inject(Theme); // eagerly init theme
}
