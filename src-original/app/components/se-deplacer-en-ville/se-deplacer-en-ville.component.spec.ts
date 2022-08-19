import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeDeplacerEnVilleComponent } from './se-deplacer-en-ville.component';

describe('SeDeplacerEnVilleComponent', () => {
  let component: SeDeplacerEnVilleComponent;
  let fixture: ComponentFixture<SeDeplacerEnVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeDeplacerEnVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeDeplacerEnVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
