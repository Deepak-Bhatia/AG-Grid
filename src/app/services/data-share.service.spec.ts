/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataShareService } from './data-share.service';

describe('Service: DataShare', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataShareService]
    });
  });

  it('should ...', inject([DataShareService], (service: DataShareService) => {
    expect(service).toBeTruthy();
  }));
});
