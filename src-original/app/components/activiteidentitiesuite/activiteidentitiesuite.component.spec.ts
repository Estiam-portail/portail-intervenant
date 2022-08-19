import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteidentitiesuiteComponent } from './activiteidentitiesuite.component';

describe('ActiviteidentitiesuiteComponent', () => {
  let component: ActiviteidentitiesuiteComponent;
  let fixture: ComponentFixture<ActiviteidentitiesuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteidentitiesuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteidentitiesuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
