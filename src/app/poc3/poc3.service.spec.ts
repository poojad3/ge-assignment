import { TestBed } from '@angular/core/testing';

import { Poc3Service } from './poc3.service';

describe('Poc3Service', () => {
  let service: Poc3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Poc3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
