import { Component, OnInit } from '@angular/core';
import { ProductsAreaService } from '../services/products-area.service';

@Component({
    selector: 'app-sidebar',
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private productApi: ProductsAreaService) {}
  ngOnInit(): void {
    this.getBrandsList()
    this.getCategoriesList()
  }

  protected categories:any
  protected brands: any

  getBrandsList() {
    this.productApi.getBrands().subscribe((list:any) => {
      this.brands = list
      
    })
  }

  getCategoriesList() {
    this.productApi.getCategories().subscribe((list:any) => {
      this.categories = list
      
    })
  }



}
