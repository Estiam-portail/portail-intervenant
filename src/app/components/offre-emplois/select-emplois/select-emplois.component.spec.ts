import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmploisComponent } from './select-emplois.component';

describe('SelectEmploisComponent', () => {
  let component: SelectEmploisComponent;
  let fixture: ComponentFixture<SelectEmploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEmploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
