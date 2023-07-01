import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'products/:category', component: ProductsComponent},
    { path: 'product/:id', component: ProductComponent},
    { path: 'cart', component: CartComponent},
    { path: 'cart/payment', component: PaymentComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
