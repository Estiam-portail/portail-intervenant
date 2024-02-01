import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibIbanBicComponent } from './rib-iban-bic.component';

describe('RibIbanBicComponent', () => {
  let component: RibIbanBicComponent;
  let fixture: ComponentFixture<RibIbanBicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibIbanBicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibIbanBicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
