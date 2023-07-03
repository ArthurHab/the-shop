import { Component } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct.model';
import { UserPayment } from 'src/app/models/userPayment';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  products: Array<CartProduct> = new Array<CartProduct>;
  userPayment: UserPayment = { name: '', birthday: '', cpf: '', cep: '', street: '', numberHouse: ''}

  showPayment:boolean = false;

  handleClick = () => {
    this.showPayment = true;
  }

  getCartProductsInfos = async () => {
    this.products = await this.cartService.getCart();
  }

  constructor (
    private cartService: CartService
  ){}

    ngOnInit(){
      this.getCartProductsInfos();
    }
}
