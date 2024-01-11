import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CONSTANTS} from "../constants/constants";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrafficService{

  constructor(private http: HttpClient) { }

  getMostActiveTime(){
    return this.http.get(CONSTANTS.TRAFFIC_API+"/most-active-time");
  }

  getAvgActiveTime(){
    return this.http.get(CONSTANTS.TRAFFIC_API+"/avg-active-time");
  }

  getInfoAboutUser(username: string){
    return this.http.get<any[]>(CONSTANTS.TRAFFIC_API+"/user/"+username);
  }
}
