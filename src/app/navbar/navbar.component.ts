import { Component } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SignInComponent, SignUpComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isSignShow: boolean = false
  public isRegisterShow: boolean = false
  public isLoggedIn: boolean = false
  public userImg: any;
  public userName: any;

  signInForm() {
    this.isSignShow = true
  }
  showRegister(){
    this.isSignShow = false
    this.isRegisterShow = true
  }

  closeForm(close: boolean) {
    this.isSignShow= close
  }

  closeRegister(close: boolean) {
    this.isRegisterShow= close
  }

  loggedIn(logg: boolean){
    this.isLoggedIn = logg
  }

  profileInfoNav(info: any) {
    this.userImg = info.avatar;
    this.userName = info.firstName
  }

}
