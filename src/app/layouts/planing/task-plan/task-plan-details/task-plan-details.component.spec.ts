import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlanDetailsComponent } from './task-plan-details.component';

describe('TaskPlanDetailsComponent', () => {
  let component: TaskPlanDetailsComponent;
  let fixture: ComponentFixture<TaskPlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
