import { Component, OnInit } from '@angular/core';
import { ApiAreaService } from '../services/api-area.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private api: ApiAreaService) {}
  ngOnInit(): void {
    // this.createCart()
    this.getCart()
  }

  private productId:any;
  private token = sessionStorage.getItem("token")
  private headers: HttpHeaders = new HttpHeaders({
    'accept' : 'application/json' ,
    'Authorization': `Bearer ${this.token}` ,
    'Content-Type': 'application/json' 
  })

  createCart() {

    const cartData = {
      id: this.productId,
      quantity: 1
    }
    
    this.api.createCart(cartData, this.headers).subscribe({
      next: (data:any) => {
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  getCart() {
    this.api.getCart(this.headers).subscribe({
      next: (data:any) => {
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
