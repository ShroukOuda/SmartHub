import { IProduct } from '../../../core/models/iproduct';

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
