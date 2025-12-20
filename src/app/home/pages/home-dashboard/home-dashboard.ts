import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  imports: [],
  templateUrl: './home-dashboard.html',
  styleUrl: './home-dashboard.scss',
})
export class HomeDashboard {

  constructor(public router:Router){
  }

  goToLanding() {
    this.router.navigate(['landing']);
  }

}
