import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ProductComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductCardComponent, StarRatingComponent]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = {
        id: "1",
        name: "name",
        description: "description",
        imageUrl: "imageUrl",
        price: 1,
        rating: 1,
        category: "categoria"
    }
    fixture.detectChanges();
  });

  it('should create product card', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-star-rating', () => {
    const appStarRatingComponent = fixture.nativeElement.querySelector('app-star-rating');
    expect(appStarRatingComponent).toBeTruthy();
  })
  
});
