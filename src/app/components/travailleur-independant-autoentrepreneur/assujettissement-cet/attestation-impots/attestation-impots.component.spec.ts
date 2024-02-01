import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationImpotsComponent } from './attestation-impots.component';

describe('AttestationImpotsComponent', () => {
  let component: AttestationImpotsComponent;
  let fixture: ComponentFixture<AttestationImpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationImpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationImpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
