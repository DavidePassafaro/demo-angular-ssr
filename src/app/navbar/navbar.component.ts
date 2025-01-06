import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Observable } from 'rxjs';
import { ScrollingDirective } from '../../directives/scrolling.directive';
import { RouterModule } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-navbar',
  imports: [SignInComponent, SignUpComponent, ScrollingDirective, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private _cookie: SsrCookieService) {}
  ngOnInit(): void {
    this.isLoggedIn = this.userName ? true : false;
  }

  public isSignShow: boolean = false;
  public isRegisterShow: boolean = false;
  public isLoggedIn: any;
  public userImg: any = sessionStorage.getItem('userAvatar');
  public userName: any = sessionStorage.getItem('userName');
  public user: any;

  signInForm() {
    this.isSignShow = true;
  }

  signOut() {
    this._cookie.deleteAll();
    sessionStorage.clear();
    this.isLoggedIn = false;
  }
  showRegister() {
    this.isSignShow = false;
    this.isRegisterShow = true;
  }

  closeForm(close: boolean) {
    this.isSignShow = close;
  }

  closeRegister(close: boolean) {
    this.isRegisterShow = close;
  }

  loggedIn(logg: boolean) {
    this.isLoggedIn = logg;
  }

  profileInfoNav(info: any) {
    this.userImg = info.avatar;
    this.userName = info.firstName;
  }
}
