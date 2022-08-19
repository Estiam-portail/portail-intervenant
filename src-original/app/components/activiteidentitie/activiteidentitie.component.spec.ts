import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteidentitieComponent } from './activiteidentitie.component';

describe('ActiviteidentitieComponent', () => {
  let component: ActiviteidentitieComponent;
  let fixture: ComponentFixture<ActiviteidentitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteidentitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteidentitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
