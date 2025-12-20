import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { AccountDetails } from './pages/account-details/account-details';
import { featureFlagGuard } from './guard/feature-flag-guard';
import { HomeDashboard } from './pages/home-dashboard/home-dashboard';

export const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: Landing,
    canActivate: [featureFlagGuard],
    data: { feature: 'landing' }
  },
  {
    path: 'account-details',
    component: AccountDetails,
    canActivate: [featureFlagGuard],
    data: { feature: 'account-details' }
  },
  {
    path: 'home-dashboard',
    component: HomeDashboard,
    canActivate: [featureFlagGuard],
    data: { feature: 'home-dashboard' }
  }
];
