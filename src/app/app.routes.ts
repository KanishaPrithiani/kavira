// import { Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us'; 
import { Gifts } from './gifts/gifts';
import { AddToCart } from './add-to-cart/add-to-cart';
import { ContactUs } from './contact-us/contact-us';
import { Home } from './home/home';


 export const routes: Routes = [
    {path:'', component: Home},
    {path:'aboutus', component: AboutUs},
    {path:'gifts', component: Gifts},
    {path:'addtocart', component: AddToCart},
    {path:'contactus', component: ContactUs},
]
    

// export const routes: Routes = [];












