import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsAreaService } from '../services/products-area.service';
import { AllProductArea } from '../../interfaces/all-product-area';
import { Product } from '../../interfaces/product';

@Component({
    selector: 'app-sidebar',
    imports: [],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private productApi: ProductsAreaService) {}
  @Output() sendBrands: EventEmitter<AllProductArea> = new EventEmitter()
  @Output() sendAllProducts: EventEmitter<AllProductArea> = new EventEmitter()
  @Output() sendCategoryData: EventEmitter<AllProductArea> = new EventEmitter()


  ngOnInit(): void {
    this.getBrandsList()
  
  }


  protected brands: string[] = []

  showAll() {
    this.productApi.getCardsOnShopPage(1, 15).subscribe((data: AllProductArea) => {
      this.sendAllProducts.emit(data)
    })
  }

  getBrandsList() {
    this.productApi.getBrands().subscribe((list:any) => {
      this.brands = list
      
    })
  }

 

  getBrandData(brand: string) {
    this.productApi.getExactBrandData(brand).subscribe((data: AllProductArea) => {
      this.sendBrands.emit(data)
    })
  }

  



}
