import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskResultDetailsComponent } from './task-result-details.component';

describe('TaskResultDetailsComponent', () => {
  let component: TaskResultDetailsComponent;
  let fixture: ComponentFixture<TaskResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
