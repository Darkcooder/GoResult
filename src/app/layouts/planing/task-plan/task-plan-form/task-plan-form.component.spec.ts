import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlanFormComponent } from './task-plan-form.component';

describe('TaskPlanFormComponent', () => {
  let component: TaskPlanFormComponent;
  let fixture: ComponentFixture<TaskPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
