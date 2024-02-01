import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationPrecisantComponent } from './attestation-precisant.component';

describe('AttestationPrecisantComponent', () => {
  let component: AttestationPrecisantComponent;
  let fixture: ComponentFixture<AttestationPrecisantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationPrecisantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationPrecisantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
