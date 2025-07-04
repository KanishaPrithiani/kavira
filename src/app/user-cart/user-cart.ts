import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-cart',
  imports: [NgIf, NgFor],
  templateUrl: './user-cart.html',
  styleUrl: './user-cart.scss'
})
export class UserCart {

  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: Cart) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      console.log(items)
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((acc, item) => {
      return acc + (item.quantity * item.Gift.price);
    }, 0);
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
      this.calculateTotal();
    });
  }
}
