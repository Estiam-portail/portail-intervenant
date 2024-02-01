import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiecetAutoComponent } from './copiecet-auto.component';

describe('CopiecetAutoComponent', () => {
  let component: CopiecetAutoComponent;
  let fixture: ComponentFixture<CopiecetAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopiecetAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiecetAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
