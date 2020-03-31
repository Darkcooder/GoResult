import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlanListComponent } from './task-plan-list.component';

describe('TaskPlanListComponent', () => {
  let component: TaskPlanListComponent;
  let fixture: ComponentFixture<TaskPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
