import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierAudioComponent } from './fichier-audio.component';

describe('FichierAudioComponent', () => {
  let component: FichierAudioComponent;
  let fixture: ComponentFixture<FichierAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichierAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
