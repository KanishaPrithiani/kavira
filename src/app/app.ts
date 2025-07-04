import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { Cart } from './cart';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgSelectModule, NgIf, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})

export class App implements OnInit{
  protected title = 'Kavira';
  private client = inject(HttpClient)
  private cartService = inject(Cart)
  user: string | null = ''
  
  ngOnInit(): void {
      this.user = localStorage.getItem("uname")
      console.log("Here", this.user)
  }

  constructor(
    private router: Router,
  ) {
  }

    cartCount$ = this.cartService.cartCount$;
    isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.user)
    console.log(localStorage.getItem("uname"))
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  fetchData()
  {
    this.client.get('http://localhost:7979/getAllUsers')
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
  
  giftOptions = [
    { label: 'Gift Combos', route: '/gift-combos' },
    { label: 'Build Your Own', route: '/build-your-own' },
    { label: 'Chocolates', route: '/chocolates' },
    { label: 'Flowers', route: '/flowers' }
  ];
  onGiftSelect(selected: any) {
  if (selected && selected.route) {
    this.router.navigate([selected.route]);
  }

}


}

