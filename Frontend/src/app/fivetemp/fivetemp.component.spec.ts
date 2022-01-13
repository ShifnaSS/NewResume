import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivetempComponent } from './fivetemp.component';

describe('FivetempComponent', () => {
  let component: FivetempComponent;
  let fixture: ComponentFixture<FivetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
