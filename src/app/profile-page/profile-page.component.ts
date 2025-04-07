import { HttpHeaders } from '@angular/common/http';
import { afterNextRender, Component, OnInit } from '@angular/core';
import { ApiAreaService } from '../services/api-area.service';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  private sessionStorage: any;

  constructor(private api: ApiAreaService) {
    afterNextRender(() => {
      this.sessionStorage = sessionStorage;
    });
  }

  ngOnInit(): void {
    this.getProfileData();
  }

  private userId: any;

  getProfileData() {
    this.api.profileInfo().subscribe({
      next: (data: any) => {
        console.log(data);
        this.userId = data._id;
        this.sessionStorage.setItem('userId', this.userId);
      },
    });
  }
}
