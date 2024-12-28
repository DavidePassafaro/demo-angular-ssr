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

  getListByCategory(id: any) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/categories/${id}`)
  }

 

  getBrands() {
    return this.http.get("https://api.everrest.educata.dev/shop/products/brands")
  }

  getExactBrandData(name: any) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/brand/${name}`)
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
