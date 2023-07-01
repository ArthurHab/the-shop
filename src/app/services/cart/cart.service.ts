import { Injectable } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct.model';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  dataCart: Array<CartProduct> = [];

  getCart = async () => {
    return this.dataCart;
  }

  addToCart = async (product: Product) => {
    let itemFound = this.dataCart.find((item) => item.product.id === product.id);

    if(itemFound === undefined){
      let newCartProduct = {
        product: product,
        quant: 1
      }
      this.dataCart.push(newCartProduct);
    } else{
      this.dataCart.map((item) => {
        if(item.product.id === product.id){
          item.quant = item.quant + 1;
        }
      })
    }
  }

  removeItemCart = async (product: Product) => {
    let itemFound = this.dataCart.find((item) => item.product.id === product.id);

    if(itemFound != undefined){
      if(itemFound.quant < 1){
        this.dataCart = this.dataCart.filter((item) => item.product.id !== product.id);
      } else{
        this.dataCart.map((item) => {
          if(item.product.id === product.id){
            item.quant = item.quant - 1;
          }
        })
      }
    }
  }

  constructor() { }
}
