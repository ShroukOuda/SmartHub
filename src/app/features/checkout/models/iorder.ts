import { ICartItem } from '../../cart/models/icart-item';

export interface IOrder {
  id: string;
  items: ICartItem[];
  shipping: IShippingInfo;
  payment: IPaymentInfo;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface IShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface IPaymentInfo {
  cardHolder: string;
  last4: string;
  method: 'card' | 'paypal';
}
