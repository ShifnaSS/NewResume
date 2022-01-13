import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatehomeComponent } from './templatehome.component';

describe('TemplatehomeComponent', () => {
  let component: TemplatehomeComponent;
  let fixture: ComponentFixture<TemplatehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
