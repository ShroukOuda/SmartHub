import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IOrder } from '../../models/iorder';

@Component({
  selector: 'app-order-confirmation',
  imports: [RouterLink],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css',
})
export class OrderConfirmation {
  @Input({ required: true }) order!: IOrder;
}
