import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraitCasierJudiciaireComponent } from './extrait-casier-judiciaire.component';

describe('ExtraitCasierJudiciaireComponent', () => {
  let component: ExtraitCasierJudiciaireComponent;
  let fixture: ComponentFixture<ExtraitCasierJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraitCasierJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraitCasierJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
