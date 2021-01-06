import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesListItemComponent } from './cakes-list-item.component';

describe('CakesListItemComponent', () => {
  let component: CakesListItemComponent;
  let fixture: ComponentFixture<CakesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
