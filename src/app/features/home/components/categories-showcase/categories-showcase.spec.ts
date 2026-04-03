import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesShowcase } from './categories-showcase';

describe('CategoriesShowcase', () => {
  let component: CategoriesShowcase;
  let fixture: ComponentFixture<CategoriesShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
