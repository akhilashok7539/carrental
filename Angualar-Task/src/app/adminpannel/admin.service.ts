import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // COUNTRIES_URL = './assets/jsondata/countries.json'
  BASEURL:any;

  constructor(private http:HttpClient) {
    this.BASEURL = environment.BASEURL;
   }
  
  // getallCountries(){
  //   return this.http.get(this.COUNTRIES_URL);
  // }
  getallowners(pageIndex)
  {
    return this.http.get(this.BASEURL+'user/listUsers?page='+pageIndex+'&size=10&roleId=2');
  }
  getalllocation(){
    return this.http.get(this.BASEURL+'admin/listLocality');

  }
  addlocation(formdata)
  {
    return this.http.post(this.BASEURL+'admin/addLocality',formdata);
  }
  Editlocation(formdata)
  {
    return this.http.put(this.BASEURL+'admin/updateLocality',formdata);

  }
  getallvehicles(page){
    return this.http.get(this.BASEURL+'vehicle/listBasedOnApprovalStatus?status=2&page='+page+'&size=15');

  }
  approve(formdata)
  {
    return this.http.post(this.BASEURL+'vehicle/setApprovalStatus',formdata);

  }
  reject(formdata)
  {
    return this.http.post(this.BASEURL+'vehicle/setApprovalStatus',formdata);

  }
}
