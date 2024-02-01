import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieCetComponent } from './copie-cet.component';

describe('CopieCetComponent', () => {
  let component: CopieCetComponent;
  let fixture: ComponentFixture<CopieCetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopieCetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopieCetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
