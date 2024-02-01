import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreProfessionnelComponent } from './ordre-professionnel.component';

describe('OrdreProfessionnelComponent', () => {
  let component: OrdreProfessionnelComponent;
  let fixture: ComponentFixture<OrdreProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
