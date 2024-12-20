import { Component, OnInit } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
    selector: 'app-navbar',
    imports: [SignInComponent, SignUpComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
   this.isLoggedIn = sessionStorage.getItem("logged")
  }

  public isSignShow: boolean = false
  public isRegisterShow: boolean = false
  public isLoggedIn: any;
  public userImg: any = sessionStorage.getItem("profileImg");
  public userName: any = sessionStorage.getItem("profileName");

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
