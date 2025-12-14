import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { AccountDetails } from './pages/account-details/account-details';

export const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: Landing
  },
  {
    path: 'account-details',
    component: AccountDetails
  }
];
