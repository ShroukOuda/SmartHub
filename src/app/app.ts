import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header';
import { FooterComponent } from './layouts/footer/footer';
import { CommonModule } from '@angular/common';
import { NotificationService } from './core/services/notification';
import { ThemeService } from './core/services/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  notifications = inject(NotificationService);
  private theme = inject(ThemeService); // eagerly init theme
}
