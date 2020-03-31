import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldResultListComponent } from './field-result-list.component';

describe('FieldResultListComponent', () => {
  let component: FieldResultListComponent;
  let fixture: ComponentFixture<FieldResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
