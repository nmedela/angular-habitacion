/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuzDimmerComponent } from './luzDimmer.component';

describe('LuzDimmerComponent', () => {
  let component: LuzDimmerComponent;
  let fixture: ComponentFixture<LuzDimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzDimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuzDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
