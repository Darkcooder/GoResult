import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionResultDetailsComponent } from './action-result-details.component';

describe('ActionResultDetailsComponent', () => {
  let component: ActionResultDetailsComponent;
  let fixture: ComponentFixture<ActionResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
