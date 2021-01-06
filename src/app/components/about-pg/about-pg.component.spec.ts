import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPgComponent } from './about-pg.component';

describe('AboutPgComponent', () => {
  let component: AboutPgComponent;
  let fixture: ComponentFixture<AboutPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
