import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploisComponent } from './create-emplois.component';

describe('CreateEmploisComponent', () => {
  let component: CreateEmploisComponent;
  let fixture: ComponentFixture<CreateEmploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
