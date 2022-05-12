import { TestBed } from '@angular/core/testing';

import { LoginvalidateService } from './loginvalidate.service';

describe('LoginvalidateService', () => {
  let service: LoginvalidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginvalidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
