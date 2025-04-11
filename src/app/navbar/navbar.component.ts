import {
  afterNextRender,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Observable } from 'rxjs';
import { ScrollingDirective } from '../../directives/scrolling.directive';
import { RouterModule } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { ToolsService } from '../services/tools.service';
import { after } from 'node:test';

@Component({
  selector: 'app-navbar',
  imports: [SignInComponent, SignUpComponent, ScrollingDirective, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
private sessionStorage: any;

  constructor(private _cookie: SsrCookieService, private tools: ToolsService) {
    afterNextRender(() => {
      this.userImg = sessionStorage.getItem('userAvatar');
      this.userName = sessionStorage.getItem('userName');
      this.sessionStorage = sessionStorage;
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userName ? true : false;
    this.tools.isSignedIn.subscribe((info: boolean) => {
      this.isSignShow = info;
    });
    this.tools.isRegistered.subscribe((info: boolean) => {
      this.isRegisterShow = info;
    });
  }

  public isSignShow: boolean = false;
  public isRegisterShow: boolean = false;
  public isLoggedIn: any;
  public userImg: any;
  public userName: any;
  public user: any;

  signInForm() {
    this.tools.isSignedIn.next(true);
  }

  signOut() {
    this._cookie.deleteAll();
    this.sessionStorage.clear();
    this.isLoggedIn = false;
  }
  showRegister() {
    this.tools.isSignedIn.next(false);
    this.tools.isRegistered.next(true);
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
