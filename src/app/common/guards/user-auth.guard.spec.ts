import { TestBed, async, inject } from '@angular/core/testing';

import { UserAuthGuard } from './user-auth.guard';

describe('UserAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthGuard]
    });
  });

  it('should ...', inject([UserAuthGuard], (guard: UserAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
