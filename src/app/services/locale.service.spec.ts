import { TestBed } from '@angular/core/testing';

import { LocalService } from './locale.service';

describe('LocaleService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
