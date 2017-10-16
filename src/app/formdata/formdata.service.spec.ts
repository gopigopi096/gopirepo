/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormdataService } from './formdata.service';

describe('Service: Formdata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormdataService]
    });
  });

  it('should ...', inject([FormdataService], (service: FormdataService) => {
    expect(service).toBeTruthy();
  }));
});