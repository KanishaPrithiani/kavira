// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-product-detail',
//   imports: [],
//   templateUrl: './product-detail.html',
//   styleUrl: './product-detail.scss'
// })
// export class ProductDetail {

// }
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.product = params;
    });
  }
}