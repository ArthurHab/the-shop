import { Component } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartData: Array<CartProduct> = [];
  cartValue: Number = 0;

  getCartData = async() => {
    this.cartData = await this.cartService.getCart();
    this.updateCartValue();
  }

  updateCartValue = async () => {
    let cartValue = this.cartData.map((item) => item.quant * item.product.price);
    this.cartValue = cartValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(){
    this.getCartData();
  }
}
