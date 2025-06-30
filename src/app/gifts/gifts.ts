// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gifts',
//   imports: [],
//   templateUrl: './gifts.html',
//   styleUrl: './gifts.scss'
// })
// export class Gifts {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.html',
  styleUrls: ['./gifts.scss']
})
export class GiftsComponent {
  selectedProduct: any = null;

  products = [
    {
      id: 1,
      title: 'Creamy Berries Chocolate Bar',
      price: 295,
      image: 'assets/img1.png',
      description: 'Indulge in the rich and creamy taste of Baileys x SMOOR...',
      ingredients: ['Sugar', 'Cocoa Butter', 'Milk Solids'],
      weight: '100g'
    },
    {
      id: 2,
      title: 'Luxury Truffle Box',
      price: 1500,
      image: 'assets/img2.PNG',
      description: 'Elegant truffles made with Belgian chocolate and hazelnut.',
      ingredients: ['Chocolate', 'Hazelnut', 'Cream'],
      weight: '200g'
    }
    // Add more products as needed
  ];

  selectProduct(product: any) {
    console.log("Image Clicked:", product.title);
    this.selectedProduct = product;
  }

  goBack() {
    this.selectedProduct = null;
  }
}
