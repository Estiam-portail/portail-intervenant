import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisAvisImpositionComponent } from './trois-avis-imposition.component';

describe('TroisAvisImpositionComponent', () => {
  let component: TroisAvisImpositionComponent;
  let fixture: ComponentFixture<TroisAvisImpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroisAvisImpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisAvisImpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
