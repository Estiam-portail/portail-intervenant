import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteIdentitieComponent } from './carte-identitie.component';

describe('CarteIdentitieComponent', () => {
  let component: CarteIdentitieComponent;
  let fixture: ComponentFixture<CarteIdentitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteIdentitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteIdentitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
