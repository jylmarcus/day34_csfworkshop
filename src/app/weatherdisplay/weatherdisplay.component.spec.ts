import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdisplayComponent } from './weatherdisplay.component';

describe('WeatherdisplayComponent', () => {
  let component: WeatherdisplayComponent;
  let fixture: ComponentFixture<WeatherdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherdisplayComponent]
    });
    fixture = TestBed.createComponent(WeatherdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
