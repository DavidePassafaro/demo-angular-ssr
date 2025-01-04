import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsAreaService } from '../../services/products-area.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  constructor(private actR: ActivatedRoute, private service: ProductsAreaService) {}

  ngOnInit(): void {
    this.getParam()
    this.getFullInfoProduct()
  }

  public prodID!: string; 
  public prodINFO: any;
  public mainImage!: string;
  public allImages!: string[]
  public starNum!: number;
  public prodQuant: number = 1

  getParam() {
    this.actR.params.subscribe((data: Params) => {
      this.prodID = data['id']
    })
  }

  getFullInfoProduct() {
    this.service.getProductDetailInfo(this.prodID).subscribe((data: any) => {
      this.prodINFO = data
      console.log(this.prodINFO);
      this.mainImage = data.images[0]
      this.allImages = data.images
      this.starNum = Math.round(data.rating)
    })
  }

  zoomImg(currImg: string) {
    this.mainImage = currImg
    
  }

  increase() {
    this.prodQuant++
  }

  decrease() {
    this.prodQuant--
  }

}
