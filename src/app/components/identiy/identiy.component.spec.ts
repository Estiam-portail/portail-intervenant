import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiyComponent } from './identiy.component';

describe('IdentiyComponent', () => {
  let component: IdentiyComponent;
  let fixture: ComponentFixture<IdentiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
