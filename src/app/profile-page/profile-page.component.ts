import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiAreaService } from '../services/api-area.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  constructor(private api: ApiAreaService) {}
  ngOnInit(): void {
    this.getProfileData()
  }
  private accessToken = sessionStorage.getItem("token")
  private userId: any;


  getProfileData() {
    const headers = new HttpHeaders({
      "accept": "application/json",
      "Authorization": `Bearer ${this.accessToken}`
    })

    this.api.profileInfo(headers).subscribe({
      next: (data:any) => {
        console.log(data);
        this.userId = data._id
        sessionStorage.setItem("userId", this.userId)
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
