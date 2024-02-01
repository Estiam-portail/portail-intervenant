import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssujettissementCetComponent } from './assujettissement-cet.component';

describe('AssujettissementCetComponent', () => {
  let component: AssujettissementCetComponent;
  let fixture: ComponentFixture<AssujettissementCetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssujettissementCetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssujettissementCetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
