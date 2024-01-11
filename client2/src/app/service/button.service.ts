import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CONSTANTS} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor(private http: HttpClient) { }

  getAllButtons():Observable<any>{
    return this.http.get(CONSTANTS.BUTTONS_API+"/all");
  }

  getById(id: number): Observable<any>{
    return this.http.get(CONSTANTS.BUTTONS_API+"/"+id)
  }

}
