// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderResponse, OrderItemResponse, OrderStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/api/orders'; // Spring Boot API base URL

  constructor(private http: HttpClient) {}

  // -------------------------------
  // Create Order
  // -------------------------------
  createOrder(orderRequest: { 
    userName: string; 
    items: { productId: number; vendorId: number; quantity: number }[] 
  }): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${this.baseUrl}`, orderRequest);
  }

  // -------------------------------
  // Get Order by ID
  // -------------------------------
  getOrderById(orderId: number): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(`${this.baseUrl}/${orderId}`);
  }

  // -------------------------------
  // Get Orders for Logged-in User
  // -------------------------------
  getMyOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}/me`);
  }

  // -------------------------------
  // Get Orders for Logged-in Vendor
  // -------------------------------
  getMyVendorOrders(): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}/vendor/me`);
  }

  // -------------------------------
  // Get Order Items for Logged-in Vendor
  // -------------------------------
  getMyVendorOrderItems(): Observable<OrderItemResponse[]> {
    return this.http.get<OrderItemResponse[]>(`${this.baseUrl}/vendor/me/items`);
  }

  // -------------------------------
  // Get Revenue for Logged-in Vendor
  // -------------------------------
  getMyVendorRevenue(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vendor/me/revenue`);
  }

  // -------------------------------
  // Get Orders for a Specific User
  // -------------------------------
  getOrdersByUser(userName: string): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}/user/${userName}`);
  }

  // -------------------------------
  // Get Orders for a Specific Vendor
  // -------------------------------
  getOrdersByVendor(vendorId: number): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}/vendor/${vendorId}`);
  }

  // -------------------------------
  // Get Orders for a Vendor filtered by Status
  // -------------------------------
  getOrdersByVendorAndStatus(vendorId: number, status: OrderStatus): Observable<OrderResponse[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}/vendor/${vendorId}/status/${status}`);
  }

  // -------------------------------
  // Get all OrderItems for a Vendor
  // -------------------------------
  getItemsByVendor(vendorId: number): Observable<OrderItemResponse[]> {
    return this.http.get<OrderItemResponse[]>(`${this.baseUrl}/vendor/${vendorId}/items`);
  }

  // -------------------------------
  // Get all OrderItems for a Product
  // -------------------------------
  getItemsByProduct(productId: number): Observable<OrderItemResponse[]> {
    return this.http.get<OrderItemResponse[]>(`${this.baseUrl}/product/${productId}/items`);
  }

  // -------------------------------
  // Get all items in a specific Order
  // -------------------------------
  getItemsByOrder(orderId: number): Observable<OrderItemResponse[]> {
    return this.http.get<OrderItemResponse[]>(`${this.baseUrl}/${orderId}/items`);
  }

  // -------------------------------
  // Get vendor-specific order items in an order
  // -------------------------------
  getVendorItemsInOrder(vendorId: number, orderId: number): Observable<OrderItemResponse[]> {
    return this.http.get<OrderItemResponse[]>(`${this.baseUrl}/vendor/${vendorId}/order/${orderId}/items`);
  }

  // -------------------------------
  // Get vendor revenue
  // -------------------------------
  getVendorRevenue(vendorId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vendor/${vendorId}/revenue`);
  }


  checkout(paymentMethod: string): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${this.baseUrl}/checkout?paymentMethod=${paymentMethod}`, {});
  }

}


 
