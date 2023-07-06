import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartComponent } from './product-cart.component';

describe('ProductCartComponent',() => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCartComponent]
    });
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
    component.product = {
        product: {
            id: "1",
            name: "name",
            description: "description",
            imageUrl: "imageUrl",
            price: 1,
            rating: 1,
            category: "categoria"
        },
        quant: 1
    }
    fixture.detectChanges();
  });

  it('should create app-cart', () => {
    expect(component).toBeTruthy();
  });
});
