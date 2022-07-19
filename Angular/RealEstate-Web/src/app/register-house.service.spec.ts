import { TestBed } from '@angular/core/testing';

import { RegisterHouseService } from './services/register-house.service';

describe('RegisterHouseService', () => {
  let service: RegisterHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
