import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('Products Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('When Get Categories was called then should return Array of Strings',async() => {
    const getCategoriesResponse = await service.getCategories();
    expect(Array.isArray(getCategoriesResponse)).toBe(true);
    expect(getCategoriesResponse.every(item => typeof item === 'string')).toBe(true);
  });

});
