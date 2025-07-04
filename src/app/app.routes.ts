// import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us'; 
import { GiftsComponent } from './gifts/gifts';
// import { Gifts } from './gifts/gifts';
import { AddToCart } from './add-to-cart/add-to-cart';
import { ContactUs } from './contact-us/contact-us';
import { Home } from './home/home';
import { Component, HostListener } from '@angular/core';
import { Flowers } from './flowers/flowers';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { AddGifts } from './add-gifts/add-gifts';
import { CategoryGifts } from './category-gifts/category-gifts';
import { UserCart } from './user-cart/user-cart';



 export const routes: Routes = [
  {path:'', component: Home},
  {path:'aboutus', component: AboutUs},
  {path:'gifts', component: GiftsComponent},
  // {path:'gifts', component: Gifts},
  {path:'addtocart', component: UserCart},
  {path:'contactus', component: ContactUs},
  {path:'category/:cat', component: CategoryGifts},
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: 'add-gifts', component: AddGifts}
]