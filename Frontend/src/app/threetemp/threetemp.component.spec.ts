import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreetempComponent } from './threetemp.component';

describe('ThreetempComponent', () => {
  let component: ThreetempComponent;
  let fixture: ComponentFixture<ThreetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
