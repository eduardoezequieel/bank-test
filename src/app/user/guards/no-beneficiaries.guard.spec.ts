import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noBeneficiariesGuard } from './no-beneficiaries.guard';

describe('noBeneficiariesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noBeneficiariesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
