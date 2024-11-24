import { Component } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SignInComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
