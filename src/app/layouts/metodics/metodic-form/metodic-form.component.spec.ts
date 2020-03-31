import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicFormComponent } from './metodic-form.component';

describe('MetodicFormComponent', () => {
  let component: MetodicFormComponent;
  let fixture: ComponentFixture<MetodicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
