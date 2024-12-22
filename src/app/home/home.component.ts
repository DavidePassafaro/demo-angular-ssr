import { Component, OnInit } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ApiAreaService } from '../services/api-area.service';
import { HttpHeaders } from '@angular/common/http';
import { BannerComponent } from "./banner/banner.component";
import { shopCards} from "./shopCardData"

@Component({
    selector: 'app-home',
    imports: [SidebarComponent, BannerComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiAreaService) {}

  
  public shopCards: any;

  ngOnInit(): void {
    this.shopCards = shopCards
  }

}
