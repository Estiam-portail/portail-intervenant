import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuestionsComponent } from './detail-questions.component';

describe('DetailQuestionsComponent', () => {
  let component: DetailQuestionsComponent;
  let fixture: ComponentFixture<DetailQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
