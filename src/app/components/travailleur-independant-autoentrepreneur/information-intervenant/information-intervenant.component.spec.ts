import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationIntervenantComponent } from './information-intervenant.component';

describe('InformationIntervenantComponent', () => {
  let component: InformationIntervenantComponent;
  let fixture: ComponentFixture<InformationIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
