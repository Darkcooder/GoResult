import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicDetailsComponent } from './metodic-details.component';

describe('MetodicDetailsComponent', () => {
  let component: MetodicDetailsComponent;
  let fixture: ComponentFixture<MetodicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
