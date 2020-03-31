import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionResultListComponent } from './action-result-list.component';

describe('ActionResultListComponent', () => {
  let component: ActionResultListComponent;
  let fixture: ComponentFixture<ActionResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
