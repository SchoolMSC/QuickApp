/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunAddComponent } from './urun-add.component';

describe('UrunAddComponent', () => {
  let component: UrunAddComponent;
  let fixture: ComponentFixture<UrunAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
