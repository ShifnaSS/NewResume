import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtempComponent } from './fourtemp.component';

describe('FourtempComponent', () => {
  let component: FourtempComponent;
  let fixture: ComponentFixture<FourtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourtempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
