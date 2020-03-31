import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicPlanDetailsComponent } from './metodic-plan-details.component';

describe('MetodicPlanDetailsComponent', () => {
  let component: MetodicPlanDetailsComponent;
  let fixture: ComponentFixture<MetodicPlanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicPlanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
