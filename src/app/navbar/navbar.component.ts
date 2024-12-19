import { Component } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SignInComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isSignShow: boolean = false

  signInForm() {
    this.isSignShow = true
  }

  closeForm(close: boolean) {
    this.isSignShow= close
  }

}
