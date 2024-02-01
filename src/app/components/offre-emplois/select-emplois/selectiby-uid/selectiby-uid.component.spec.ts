import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectibyUidComponent } from './selectiby-uid.component';

describe('SelectibyUidComponent', () => {
  let component: SelectibyUidComponent;
  let fixture: ComponentFixture<SelectibyUidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectibyUidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectibyUidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
