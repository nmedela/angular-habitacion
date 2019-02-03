/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LucesComponent } from './luces.component';

describe('LucesComponent', () => {
  let component: LucesComponent;
  let fixture: ComponentFixture<LucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
