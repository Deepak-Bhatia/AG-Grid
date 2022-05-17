/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataSourceService } from './data-source.service';

describe('Service: DataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceService]
    });
  });

  it('should ...', inject([DataSourceService], (service: DataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
