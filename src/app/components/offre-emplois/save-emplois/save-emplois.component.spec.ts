import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEmploisComponent } from './save-emplois.component';

describe('SaveEmploisComponent', () => {
  let component: SaveEmploisComponent;
  let fixture: ComponentFixture<SaveEmploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEmploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
