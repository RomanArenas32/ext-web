export interface Order {
  _id: string;
  productId: string;
  product: string;
  color?: string;
  size?: string;
  quantity?: number;
  paymentMethod: string;
  code: string;
  totalPrice: number;
  status: string;
  name: string;
}
