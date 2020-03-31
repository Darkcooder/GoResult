import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicResultDetailsComponent } from './metodic-result-details.component';

describe('MetodicResultDetailsComponent', () => {
  let component: MetodicResultDetailsComponent;
  let fixture: ComponentFixture<MetodicResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
