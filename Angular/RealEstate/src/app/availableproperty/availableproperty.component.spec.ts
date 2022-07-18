import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablepropertyComponent } from './availableproperty.component';

describe('AvailablepropertyComponent', () => {
  let component: AvailablepropertyComponent;
  let fixture: ComponentFixture<AvailablepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablepropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
