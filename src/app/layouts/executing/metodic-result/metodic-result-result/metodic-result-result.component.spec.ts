import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicResultResultComponent } from './metodic-result-result.component';

describe('MetodicResultResultComponent', () => {
  let component: MetodicResultResultComponent;
  let fixture: ComponentFixture<MetodicResultResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicResultResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicResultResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
