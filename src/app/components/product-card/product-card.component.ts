import { Component, Input } from '@angular/core';
import { MessagesService } from 'src/app/messages/messages.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  addToCart = async () => {
    this.cartService.addToCart(this.product);
    this.messageService.setMessage(this.product.name + ' Add!');
  }

  constructor(
    private cartService: CartService,
    private messageService: MessagesService
  ){}
}
