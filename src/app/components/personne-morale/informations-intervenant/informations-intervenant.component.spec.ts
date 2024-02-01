import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsIntervenantComponent } from './informations-intervenant.component';

describe('InformationsIntervenantComponent', () => {
  let component: InformationsIntervenantComponent;
  let fixture: ComponentFixture<InformationsIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
