import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../cart';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-gifts',
  imports: [NgFor],
  templateUrl: './category-gifts.html',
  styleUrl: './category-gifts.scss'
})
export class CategoryGifts {
  categoryName = '';
  gifts: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private cart: Cart
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.categoryName = params.get('cat') || '';
      this.fetchGiftsByCategory();
    });
  }

  fetchGiftsByCategory() {
    this.http.get<any[]>(`http://localhost:3000/api/gifts/category/${this.categoryName}`)
      .subscribe(res => {
        this.gifts = res;
      });
  }

  addToCart(gifts: number) {
    console.log(gifts)
    this.cart.addToCart(gifts, 1);
  }
}