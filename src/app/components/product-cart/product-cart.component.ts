import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input() product!: CartProduct;

  addProduct = async () => {
    this.cartService.addToCart(this.product.product);
  }

  subProduct = async () => {
    this.cartService.removeItemCart(this.product.product)
  }

  constructor(
    private cartService:  CartService
  ){}
}
