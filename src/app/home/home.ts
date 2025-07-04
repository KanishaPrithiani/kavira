import { Component, OnInit } from '@angular/core';
import { Gifts } from '../gifts';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Cart } from '../cart';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})


export class Home {
  gifts: any[] = [];
  selectedGift: any;

  constructor(private giftService: Gifts, private toastr: ToastrService, private cart: Cart) {}

  ngOnInit(): void {
    this.giftService.getAllGifts().subscribe({
      next: (res) => this.gifts = res,
      error: () => this.toastr.error('Failed to load gifts', 'Error')
    });
  }

  addToCart(gift: any) {
    this.cart.addToCart(gift.id, 1);
    this.toastr.success(`${gift.name} added to cart! 🛒`);
  }

  openGiftModal(gift: any) {
    this.selectedGift = gift;
    const modal = new bootstrap.Modal(document.getElementById('giftModal'));
    modal.show();
  }
}
