import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondeDuTravailComponent } from './monde-du-travail.component';

describe('MondeDuTravailComponent', () => {
  let component: MondeDuTravailComponent;
  let fixture: ComponentFixture<MondeDuTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondeDuTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondeDuTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
