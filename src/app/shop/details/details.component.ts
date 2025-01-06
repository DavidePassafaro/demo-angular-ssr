import { AfterContentChecked, AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsAreaService } from '../../services/products-area.service';
import { CommonModule } from '@angular/common';
import { RelatedProdsComponent } from "./related-prods/related-prods.component";
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RelatedProdsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  constructor(private actR: ActivatedRoute, private service: ProductsAreaService, public router: Router) {}

  ngOnInit(): void {
    this.getParam()
    this.getFullInfoProduct(this.prodID)
    console.log("Dsadsd");
    
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

  otherRelatedArea(pageID: string) {
    this.getFullInfoProduct(pageID)
    
  }

  getFullInfoProduct(pageID:string) {
    this.service.getProductDetailInfo(pageID).subscribe((data: Product) => {
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
