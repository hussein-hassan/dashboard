import {TestBed} from '@angular/core/testing';

import {RegisterUserDataService} from './register-user-data';

describe('RegisterUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterUserDataService = TestBed.get(RegisterUserDataService);
    expect(service).toBeTruthy();
  });
});
