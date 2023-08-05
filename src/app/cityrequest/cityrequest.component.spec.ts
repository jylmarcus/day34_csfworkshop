import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityrequestComponent } from './cityrequest.component';

describe('CityrequestComponent', () => {
  let component: CityrequestComponent;
  let fixture: ComponentFixture<CityrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityrequestComponent]
    });
    fixture = TestBed.createComponent(CityrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
