import { Routes } from '@angular/router';
import { Home } from './home/home';
import { homeRoutes } from './home/home-routing-module';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: homeRoutes
  }
];
