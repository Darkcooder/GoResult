import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicPlanListComponent } from './metodic-plan-list.component';

describe('MetodicPlanListComponent', () => {
  let component: MetodicPlanListComponent;
  let fixture: ComponentFixture<MetodicPlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicPlanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
