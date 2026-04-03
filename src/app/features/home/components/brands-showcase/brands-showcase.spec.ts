import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsShowcase } from './brands-showcase';

describe('BrandsShowcase', () => {
  let component: BrandsShowcase;
  let fixture: ComponentFixture<BrandsShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
