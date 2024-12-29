import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllProductArea } from '../../interfaces/all-product-area';

@Injectable({
  providedIn: 'root'
})
export class ProductsAreaService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/categories")
  }

  getListByCategory(id: any, page:any, size :any) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/category/${id}?page_index=${page}&page_size=${size}`)
  }

 

  getBrands() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/brands")
  }

  getExactBrandData(name: string) {
    return this.http.get<AllProductArea>(`https://api.everrest.educata.dev/shop/products/brand/${name}?page_size=10`)
  }

  getSearchedData(searchInput: string) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?keywords=${searchInput}`)
  }

  getCardsforHome() {
    return this.http.get<AllProductArea>('https://api.everrest.educata.dev/shop/products/all?page_size=10')
  }

  getCardsOnShopPage(page: any, size: any) {
    return this.http.get<AllProductArea>(`https://api.everrest.educata.dev/shop/products/all?page_index=${page}&page_size=${size}`)
  }
}
