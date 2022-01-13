import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwotempComponent } from './twotemp.component';

describe('TwotempComponent', () => {
  let component: TwotempComponent;
  let fixture: ComponentFixture<TwotempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwotempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwotempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
