import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAddToCartDialogComponent } from './info-add-to-cart-dialog.component';

describe('InfoAddToCartDialogComponent', () => {
  let component: InfoAddToCartDialogComponent;
  let fixture: ComponentFixture<InfoAddToCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAddToCartDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAddToCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
