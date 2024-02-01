import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieExtraitComponent } from './copie-extrait.component';

describe('CopieExtraitComponent', () => {
  let component: CopieExtraitComponent;
  let fixture: ComponentFixture<CopieExtraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopieExtraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopieExtraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
