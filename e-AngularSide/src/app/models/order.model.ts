export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}


export interface OrderItemResponse {
  id: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  subTotal: number;
  vendorName: string;
}


export interface OrderResponse {
  id: number;
  userName: string;
  totalPrice: number;
  orderStatus: OrderStatus; 
  items: OrderItemResponse[];  
}
