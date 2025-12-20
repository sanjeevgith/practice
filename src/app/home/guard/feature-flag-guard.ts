import { CanActivateFn } from '@angular/router';
import { ModelService } from './model-service';
import { inject } from '@angular/core';

export const featureFlagGuard: CanActivateFn = (route, state) => {
  const modalService = inject(ModelService);

  const feature = route.data['feature'];

  if (feature === 'landing' || feature ==='home-dashboard') {
    return true;
  }

  modalService.open('This feature is not enabled yet.');
  return false;
};
