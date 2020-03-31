import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicListComponent } from './metodic-list.component';

describe('MetodicListComponent', () => {
  let component: MetodicListComponent;
  let fixture: ComponentFixture<MetodicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
