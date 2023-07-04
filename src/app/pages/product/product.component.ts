import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/messages/messages.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product?: Product;

  getProduct = async (productId: string | null) => {
    this.product = await this.productsServices.getProduct(productId);
  }

  handleClick = async() => {
    this.cartService.addToCart(this.product!);
    this.messageService.setMessage(this.product?.name + ' Add!');
  }

  constructor(
    private cartService: CartService,
    private productsServices: ProductsService,
    private route: ActivatedRoute,
    private messageService: MessagesService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let queryParamCategoryValue = params.get('id');
      this.getProduct(queryParamCategoryValue)
    })
  }

}
