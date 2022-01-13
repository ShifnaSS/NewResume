import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtempComponent } from './sixtemp.component';

describe('SixtempComponent', () => {
  let component: SixtempComponent;
  let fixture: ComponentFixture<SixtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
