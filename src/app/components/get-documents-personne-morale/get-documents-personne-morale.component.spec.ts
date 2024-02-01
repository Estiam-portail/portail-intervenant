import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentsPersonneMoraleComponent } from './get-documents-personne-morale.component';

describe('GetDocumentsPersonneMoraleComponent', () => {
  let component: GetDocumentsPersonneMoraleComponent;
  let fixture: ComponentFixture<GetDocumentsPersonneMoraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDocumentsPersonneMoraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDocumentsPersonneMoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
