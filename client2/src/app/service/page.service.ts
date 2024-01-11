import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CONSTANTS} from "../constants/constants";
import {Page} from "../model/Page";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {}

  getAllPages(){
    return this.http.get<any[]>(CONSTANTS.PAGE_API+"/all");
  }

  getById(id: number): Observable<any>{
    return this.http.get(CONSTANTS.PAGE_API+"/"+id)
  }

}
