import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestmotdepasseComponent } from './restmotdepasse.component';

describe('RestmotdepasseComponent', () => {
  let component: RestmotdepasseComponent;
  let fixture: ComponentFixture<RestmotdepasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestmotdepasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestmotdepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
