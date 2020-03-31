import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskResultFormComponent } from './task-result-form.component';

describe('TaskResultFormComponent', () => {
  let component: TaskResultFormComponent;
  let fixture: ComponentFixture<TaskResultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskResultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
