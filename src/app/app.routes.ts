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



 export const routes: Routes = [
    {path:'', component: Home},
    {path:'aboutus', component: AboutUs},
    {path:'gifts', component: GiftsComponent},
    // {path:'gifts', component: Gifts},
    {path:'addtocart', component: AddToCart},
    {path:'contactus', component: ContactUs},
     {path:'category', component: Flowers},
]
    

// export const routes: Routes = [];












