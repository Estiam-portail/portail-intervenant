import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeFormationComponent } from './organisme-formation.component';

describe('OrganismeFormationComponent', () => {
  let component: OrganismeFormationComponent;
  let fixture: ComponentFixture<OrganismeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
