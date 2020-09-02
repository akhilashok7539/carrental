import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // COUNTRIES_URL = './assets/jsondata/countries.json'
  BASEURL = "http://localhost:8080/server/api/";

  constructor(private http:HttpClient) {
    this.BASEURL = environment.BASEURL;
   }
  
  // getallCountries(){
  //   return this.http.get(this.COUNTRIES_URL);
  // }
  getallowners()
  {
    return this.http.get(this.BASEURL);
  }
}
