import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiAreaService } from '../services/api-area.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private api: ApiAreaService, private _cookie: CookieService) {}
  @Output() closeEmit: EventEmitter<boolean> = new EventEmitter()

  public accessToken: any;
  public errorSMS: string | undefined
  public errAlert:boolean = false
  public successLogin: boolean = false

  protected signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  signIn() {
    this.api.signIn(this.signInForm.value).subscribe({
      next: (data: any) => {
        this.accessToken = data.access_token;
        this._cookie.set("user", this.accessToken, 0.4)
        this.errAlert = false
        this.successLogin = true

        if(this.successLogin) {
          setTimeout(() => {
            this.closeEmit.emit(false)
          }, 1000);
        }
      },
      error: (err) => {
        this.errorSMS = err.error.error
        this.errAlert = true
        
      }
    });
  }

  closeForm() {
    this.closeEmit.emit(false)
  }

  everyWhere(event: any) {
    if(event.target.className == "signArea") {
      this.closeEmit.emit(false)
    }
    
  }
}
