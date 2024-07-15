import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly DATA_URL: string = '/assets/data/data.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.DATA_URL);
  }
}
