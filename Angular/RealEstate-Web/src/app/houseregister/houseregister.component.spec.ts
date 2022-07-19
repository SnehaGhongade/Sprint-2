import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseregisterComponent } from './houseregister.component';

describe('HouseregisterComponent', () => {
  let component: HouseregisterComponent;
  let fixture: ComponentFixture<HouseregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
