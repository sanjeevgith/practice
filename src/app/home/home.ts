import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginModule } from "./module/login/login-module";
import { Footer } from "./pages/footer/footer";
import { Header } from "./pages/header/header";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    LoginModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
