import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicPlanFormComponent } from './metodic-plan-form.component';

describe('MetodicPlanFormComponent', () => {
  let component: MetodicPlanFormComponent;
  let fixture: ComponentFixture<MetodicPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
