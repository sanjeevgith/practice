import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from '../../services/landing-service';

@Component({
  selector: 'app-account-details',
  imports: [],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
})
export class AccountDetails implements OnInit {

  constructor(public router: Router, public landingService: LandingService) {

  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  goToLanding() {
    this.router.navigate(['landing']);
  }

  getUserDetails() {
    this.landingService.valuePostData$.subscribe((value: any[]) => {
      console.log(value); // ✅ now you get the actual array
    });
  }
}
