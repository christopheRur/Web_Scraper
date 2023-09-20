import { TestBed } from '@angular/core/testing';

import { ScraperServiceService } from './scraper-service.service';

describe('ScraperServiceService', () => {
  let service: ScraperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScraperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
