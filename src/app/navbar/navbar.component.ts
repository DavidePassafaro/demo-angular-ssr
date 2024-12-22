import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { Observable } from 'rxjs';
import { ScrollingDirective } from '../../directives/scrolling.directive';

@Component({
    selector: 'app-navbar',
    imports: [SignInComponent, SignUpComponent, ScrollingDirective],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
   this.isLoggedIn = sessionStorage.getItem("logged")
  //  this.scrolling.subscribe((data:any) => {
  //   console.log(data);
    
  //  })
  }
  ngAfterViewChecked() {
    
  }

  @ViewChild("scroll") public navScroll!: ElementRef
  public isSignShow: boolean = false
  public isRegisterShow: boolean = false
  public isLoggedIn: any;
  public userImg: any = sessionStorage.getItem("profileImg");
  public userName: any = sessionStorage.getItem("profileName");

  // public scrolling: Observable<any> = new Observable((y_position) => {
  //   y_position.next(window.scrollY)
  // })

  scrolling(scroll:any) {
    console.log(scroll);
    
  }

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
