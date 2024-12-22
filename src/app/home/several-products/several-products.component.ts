import { Component, OnInit } from '@angular/core';
import { ApiAreaService } from '../../services/api-area.service';

@Component({
  selector: 'app-several-products',
  imports: [],
  templateUrl: './several-products.component.html',
  styleUrl: './several-products.component.css'
})
export class SeveralProductsComponent implements OnInit {
  constructor(private service: ApiAreaService) {}
  ngOnInit(): void {
    this.showCards()
  }

  protected productList: any[] = []

  showCards() {
    this.service.getCardsonHome().subscribe({
      next: (data: any) => {
        this.productList = data.products
      },
      error: (error) => {
        alert(error)
      },
    })
  }

}
