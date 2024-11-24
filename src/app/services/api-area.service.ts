import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAreaService {

  constructor(private http: HttpClient) { }

  signIn(body: any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", body)
  }

  profileInfo(token: any) {
    return this.http.get("https://api.everrest.educata.dev/auth", {headers: token})
  }

  createCart(body: any, token: any) {
    return this.http.post("https://api.everrest.educata.dev/shop/cart/product", body, {headers: token})
  }

  getCart(token: any) {
    return this.http.get("https://api.everrest.educata.dev/shop/cart", {headers: token})
  }
}
