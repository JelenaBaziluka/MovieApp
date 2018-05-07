/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesserviceService } from './moviesservice.service';

describe('MoviesserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesserviceService]
    });
  });

  it('should ...', inject([MoviesserviceService], (service: MoviesserviceService) => {
    expect(service).toBeTruthy();
  }));
});
