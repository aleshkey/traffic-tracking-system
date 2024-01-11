import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "http";
import {CONSTANTS} from "../constants/constants";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get<any[]>(CONSTANTS.PRODUCT_API+"/all")
  }

  getMostPopularProduct(){
    return this.http.get<Product>(CONSTANTS.PRODUCT_API+"/get-most-popular")
  }

  getAvgConversion(){
    return this.http.get(CONSTANTS.PRODUCT_API+"/get-conversion-rate")
  }
}
