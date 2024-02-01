import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVitaleScComponent } from './carte-vitale-sc.component';

describe('CarteVitaleScComponent', () => {
  let component: CarteVitaleScComponent;
  let fixture: ComponentFixture<CarteVitaleScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteVitaleScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVitaleScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
