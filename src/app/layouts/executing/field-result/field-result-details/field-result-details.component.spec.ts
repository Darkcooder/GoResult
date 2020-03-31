import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldResultDetailsComponent } from './field-result-details.component';

describe('FieldResultDetailsComponent', () => {
  let component: FieldResultDetailsComponent;
  let fixture: ComponentFixture<FieldResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
