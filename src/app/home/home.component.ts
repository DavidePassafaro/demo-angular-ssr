import { Component } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
