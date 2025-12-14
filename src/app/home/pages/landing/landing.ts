import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from '../../services/landing-service';
import { Popup } from "../popup/popup";


@Component({
  selector: 'app-landing',
  imports: [Popup],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing implements OnInit {

  postDataResponse = signal<any[]>([]);

  constructor(public router: Router, public landingService: LandingService) {

  }
  ngOnInit(): void {
    this.getPostData();
  }

  goToLanding() {
    this.router.navigate(['account-details']);
  }


  modalOpen = false;
  modalTitle = '';
  modalBody = '';
  openModal(item: any) {
    this.modalTitle = item.title;
    this.modalBody = item.body;
    this.modalOpen = true;  // control modal from parent
  }

  closeModal() {
    this.modalOpen = false;
  }

  saveModal() {
    console.log('Save clicked!');
    this.closeModal();
  }

  getPostData() {
    this.landingService.getPost().subscribe(({
      next: (res) => {
        console.log(res);
        this.postDataResponse.set(res);
        this.setPostdata(this.postDataResponse());
      },
      error(err) {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    }))
  }

  removeTodo(id: any) {
    this.postDataResponse.update(list => list.filter(todo => todo.id !== id));
    console.log(this.postDataResponse());
    
  }

  setPostdata(data: any) {
    this.landingService.setValuePostData(data)
  }

}
