import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDemploiComponent } from './offre-demploi.component';

describe('OffreDemploiComponent', () => {
  let component: OffreDemploiComponent;
  let fixture: ComponentFixture<OffreDemploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreDemploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDemploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
