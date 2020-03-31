import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodicResultListComponent } from './metodic-result-list.component';

describe('MetodicResultListComponent', () => {
  let component: MetodicResultListComponent;
  let fixture: ComponentFixture<MetodicResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodicResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodicResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
