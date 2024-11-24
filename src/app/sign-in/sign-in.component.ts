import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiAreaService } from '../services/api-area.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private api: ApiAreaService) {}

  public accessToken: any;

  protected signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signIn() {
    this.api.signIn(this.signInForm.value).subscribe({
      next: (data: any) => {
        this.accessToken = data.access_token;
        sessionStorage.setItem('token', this.accessToken);
      },
      error: (err) => {
        alert(err)
      }
    });
  }
}
