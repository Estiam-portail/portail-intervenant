import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibIbanComponent } from './rib-iban.component';

describe('RibIbanComponent', () => {
  let component: RibIbanComponent;
  let fixture: ComponentFixture<RibIbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibIbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibIbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
