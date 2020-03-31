import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldResultFormComponent } from './field-result-form.component';

describe('FieldResultFormComponent', () => {
  let component: FieldResultFormComponent;
  let fixture: ComponentFixture<FieldResultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldResultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
