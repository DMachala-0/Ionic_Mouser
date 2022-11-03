import { TestBed } from '@angular/core/testing';

import { MainPageStorageService } from './main-page-storage.service';

describe('MainPageStorageService', () => {
  let service: MainPageStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPageStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
