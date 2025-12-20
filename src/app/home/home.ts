import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginModule } from "./module/login/login-module";
import { Footer } from "./pages/footer/footer";
import { Header } from "./pages/header/header";
import { ModelService } from "./guard/model-service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    LoginModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  homeData="Sanjeev";

  headerfunctionCall(){
    alert("home function from header call")
  }

  title = signal('practice');
  showModal = false;
  message = '';

  constructor(private modalService: ModelService) {}

  ngOnInit() {
    this.modalService.modal$.subscribe(msg => {
      this.message = msg;
      this.showModal = true;
    });
  }

  close() {
    this.showModal = false;
  }

}
