import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskResultListComponent } from './task-result-list.component';

describe('TaskResultListComponent', () => {
  let component: TaskResultListComponent;
  let fixture: ComponentFixture<TaskResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
