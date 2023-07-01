import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: Array<Product> = [];
  categories: Array<String> = [];

  getProducts = async (category: string | null) => {
    this.products = await this.productsService.getProducts(category);
  }

  getCategories = async () => {
    this.categories = await this.productsService.getCategories();
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let queryParamCategoryValue = params.get('category');
      this.getCategories();
      this.getProducts(queryParamCategoryValue);
    })
  }
}
