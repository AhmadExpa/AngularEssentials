import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeComponent } from './ng-on-change.component';

describe('NgOnChangeComponent', () => {
  let component: NgOnChangeComponent;
  let fixture: ComponentFixture<NgOnChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnChangeComponent]
    });
    fixture = TestBed.createComponent(NgOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
