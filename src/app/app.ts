import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgSelectModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})

export class App {
  protected title = 'Kavira';
  private client = inject(HttpClient)

  constructor(
    private router: Router,
  ) {}

    isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
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

