import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainNav } from '../components/main-nav/main-nav';
import { CartIcon } from '../components/cart-icon/cart-icon';
import { UserMenu } from '../components/user-menu/user-menu';
import { SearchBar } from '../../../shared/components/search-bar/search-bar';
import { Theme } from '../../../core/services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MainNav, CartIcon, UserMenu, SearchBar, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  theme = inject(Theme);
}