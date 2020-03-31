import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPlanListComponent } from './action-plan-list.component';

describe('ActionPlanListComponent', () => {
  let component: ActionPlanListComponent;
  let fixture: ComponentFixture<ActionPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
