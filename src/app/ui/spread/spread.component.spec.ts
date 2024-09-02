import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadComponent } from './spread.component';

describe('SpreadComponent', () => {
  let component: SpreadComponent;
  let fixture: ComponentFixture<SpreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpreadComponent]
    });
    fixture = TestBed.createComponent(SpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
