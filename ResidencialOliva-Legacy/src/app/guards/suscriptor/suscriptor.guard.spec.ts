import { TestBed } from '@angular/core/testing';

import { SuscriptorGuard } from './suscriptor.guards';

describe('SuscriptorGuard', () => {
  let guard: SuscriptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuscriptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
