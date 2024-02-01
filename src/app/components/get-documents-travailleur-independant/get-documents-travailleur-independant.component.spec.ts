import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentsTravailleurIndependantComponent } from './get-documents-travailleur-independant.component';

describe('GetDocumentsTravailleurIndependantComponent', () => {
  let component: GetDocumentsTravailleurIndependantComponent;
  let fixture: ComponentFixture<GetDocumentsTravailleurIndependantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDocumentsTravailleurIndependantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDocumentsTravailleurIndependantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
