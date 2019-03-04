/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LuzServiceService } from './luzService.service';

describe('Service: LuzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuzServiceService]
    });
  });

  it('should ...', inject([LuzServiceService], (service: LuzServiceService) => {
    expect(service).toBeTruthy();
  }));
});
