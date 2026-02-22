import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav';
import { CartIconComponent } from './components/cart-icon/cart-icon';
import { UserMenuComponent } from './components/user-menu/user-menu';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar';
import { ThemeService } from '../../core/services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MainNavComponent, CartIconComponent, UserMenuComponent, SearchBarComponent, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  theme = inject(ThemeService);
}
