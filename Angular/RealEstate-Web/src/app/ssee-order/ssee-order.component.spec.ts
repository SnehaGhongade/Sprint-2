import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SseeOrderComponent } from './ssee-order.component';

describe('SseeOrderComponent', () => {
  let component: SseeOrderComponent;
  let fixture: ComponentFixture<SseeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SseeOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SseeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
