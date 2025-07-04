import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Cart {
    private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  private baseUrl = 'http://localhost:3000/api/cart';
  private userId = Number(localStorage.getItem('userId')); // ensure you set this during login

  constructor(private http: HttpClient) {
    if (this.userId) {
      this.loadCartCount();
    }
  }

  addToCart(GiftId: number, quantity = 1) {
    const payload = {
      GiftId,
      quantity,
      UserId: this.userId
    };

    return this.http.post(this.baseUrl, payload).subscribe(() => {
      this.cartCount.next(this.cartCount.value + 1);
    });
  }

  loadCartCount() {
    this.http.get<any[]>(`${this.baseUrl}/${this.userId}`).subscribe(
      res => {
        this.cartCount.next(res.length);
      },
      err => {
        console.error('Error loading cart count:', err);
      }
    );
  }

  getCartItems() {
    return this.http.get<any[]>(`${this.baseUrl}/${this.userId}`);
  }
  
  removeFromCart(cartItemId: number) {
  return this.http.delete(`http://localhost:3000/api/cart/${cartItemId}`);
}
}
