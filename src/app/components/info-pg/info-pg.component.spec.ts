import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPgComponent } from './info-pg.component';

describe('InfoPgComponent', () => {
  let component: InfoPgComponent;
  let fixture: ComponentFixture<InfoPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
