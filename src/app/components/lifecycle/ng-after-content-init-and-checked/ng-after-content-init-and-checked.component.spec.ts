import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentInitAndCheckedComponent } from './ng-after-content-init-and-checked.component';

describe('NgAfterContentInitAndCheckedComponent', () => {
  let component: NgAfterContentInitAndCheckedComponent;
  let fixture: ComponentFixture<NgAfterContentInitAndCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterContentInitAndCheckedComponent]
    });
    fixture = TestBed.createComponent(NgAfterContentInitAndCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
