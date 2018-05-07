/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UmcomPageComponent } from './umcom-page.component';

describe('UmcomPageComponent', () => {
  let component: UmcomPageComponent;
  let fixture: ComponentFixture<UmcomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmcomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmcomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
