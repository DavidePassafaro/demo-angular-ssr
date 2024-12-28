import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiAreaService } from '../services/api-area.service';

@Component({
    selector: 'app-profile-page',
    imports: [],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  constructor(private api: ApiAreaService) {}
  ngOnInit(): void {
    this.getProfileData()
  }

  private userId: any;


  getProfileData() {
   

    this.api.profileInfo().subscribe({
      next: (data:any) => {
        console.log(data);
        this.userId = data._id
        sessionStorage.setItem("userId", this.userId)

        this.api.deleteProduct({
          id: "6526bf2d57e3ec956179e6fd"
        }).subscribe((data) => {
          console.log(data);
          
        })
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
