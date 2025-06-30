import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgSelectModule],
  standalone: true,  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Kavira';

  constructor(
    private router: Router
  ) {}

    isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
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

