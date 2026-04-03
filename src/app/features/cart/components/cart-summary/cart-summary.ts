import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
    cart = inject(Cart);
}
