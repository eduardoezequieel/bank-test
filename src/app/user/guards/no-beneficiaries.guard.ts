import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ShareService } from '../services/share.service';

export const noBeneficiariesGuard: CanActivateFn = () => {
  const shareService = inject(ShareService);
  const router = inject(Router);

  if (shareService.getData().length > 0) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
