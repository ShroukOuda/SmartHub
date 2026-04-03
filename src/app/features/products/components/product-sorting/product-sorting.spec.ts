import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSorting } from './product-sorting';

describe('ProductSorting', () => {
  let component: ProductSorting;
  let fixture: ComponentFixture<ProductSorting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSorting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSorting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
