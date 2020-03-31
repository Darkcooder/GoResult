import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionResultFormComponent } from './action-result-form.component';

describe('ActionResultFormComponent', () => {
  let component: ActionResultFormComponent;
  let fixture: ComponentFixture<ActionResultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionResultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
