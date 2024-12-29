import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductsAreaService } from '../services/products-area.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { AllProductArea } from '../../interfaces/all-product-area';

@Component({
  selector: 'app-shop',
  imports: [SidebarComponent, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(private prodService: ProductsAreaService) {}

  ngOnInit(): void {
    this.showProducts(this.currentPage, this.pageSize);
  }

  public productList: Product[] = [];
  public pageList: number[] = [];
  public currentPage: number  = 1;
  public pageSize: any = 15;
  public totalSize!: any;
  public altImage: string =
    'https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=';

  showProducts(page: number | string = 1, size: number = this.totalSize) {
    this.currentPage = +page;
    this.prodService
      .getCardsOnShopPage(page, size)
      .subscribe((data: AllProductArea) => {
        console.log(data);
        this.productList = data.products;
        this.totalSize = data.total;
        let pages = Math.round(data.total / size);
        this.pageList = [];
        for (let i = 1; i <= pages; i++) {
          this.pageList.push(i);
        }
      });
  }

  switchBrands(dataOfBrand: AllProductArea) {
    this.productList = dataOfBrand.products
    this.pageList = [1]
    
  }

  changePageSize() {
    this.currentPage = 1;
    let pageArea = this.pageSize == '' ? this.totalSize : this.pageSize;

    this.showProducts(this.currentPage, pageArea);
  }

  prevPage() {
    this.currentPage--
    this.showProducts(this.currentPage, this.pageSize)
  }

  nextPage() {
    this.currentPage++
    this.showProducts(this.currentPage, this.pageSize)
  }
}
