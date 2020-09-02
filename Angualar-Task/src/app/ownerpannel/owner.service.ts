import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  BASEURL: any;
  url: any;
  constructor(private http: HttpClient) {
    this.BASEURL = environment.BASEURL;
  }
  getalllocality() {
    return this.http.get(this.BASEURL + 'admin/listLocality');
  }
  getallcars(id) {
    return this.http.get(this.BASEURL + 'vehicle/list?ownerId=' + id + '&page=0&size=100');

  }
  addnewvehicle(formdata) {
    return this.http.post(this.BASEURL + 'vehicle/add', formdata);

  }
  getalldrivers(id) {
    return this.http.get(this.BASEURL + 'driver/list?ownerId=' + id + '&page=0&size=50');

  }
  addnewdriver(formdata){
    return this.http.post(this.BASEURL + 'driver/add', formdata);

  }
  getliscncefront(id) {
      // var headers = new Headers();
      // headers.append('Content-Type', 'image/jpeg');

    // return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id);
  //  .pipe(
  //       map( res =>{
  //         console.log(res)
  //       }));
    let token = JSON.parse(localStorage.getItem('token'));

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+token
      });
      const httpOptions = {
        headers: headers_object
      };

      let url =this.BASEURL + 'driver/getLicenceFront/' + id;
    // //   console.log(url);
      window.open(url, '_blank');

    // // return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id).pipe(
    // //   map(
    // //   res =>{
    // //   window.open(this.BASEURL + 'driver/getLicenceFront/' + id, '_blank');

    // //   }
    // // ));
    // confirm("Download");
    // return this.http.get(this.BASEURL + 'driver/getLicenceFront/' + id)
    //   .pipe(
    //     tap( // Log the result or error
    //       data => {
    //         console.log(data)
    //         // this._downloadFile(this.BASEURL + 'driver/getLicenceFront/' + id);

    //       },
    //       error => {

    //       }
    //     )
    //   );
  }

  private _downloadFile = function (sUrl) {

    if (/(iP)/g.test(navigator.userAgent)) {
      alert('Your device does not support files downloading. Please try again in desktop browser.');
      return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (this._isChrome || this._isSafari) {
      //Creating new link node.
      var link = document.createElement('a');
      link.href = sUrl;

      if (link.download !== undefined) {
        //Set HTML5 download attribute. This will prevent file from opening if supported.
        var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
        link.download = fileName;
      }

      //Dispatching click event.
      if (document.createEvent) {
        var e = document.createEvent('MouseEvents');
        e.initEvent('click', true, true);
        link.dispatchEvent(e);
        return true;
      }
    }



    window.open(sUrl, '_self');
    return true;
  }
}
