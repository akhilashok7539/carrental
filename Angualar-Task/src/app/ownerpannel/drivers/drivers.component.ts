import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  ownerdetails:any;
  ownerId:any;
  driverslist:any = [];
  apUrl:any;
  contents: string;
  Id: any;
  imageToShow: any;
  constructor(private router:Router,private ownerservice:OwnerService) { }

  ngOnInit() {
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    this.apUrl = environment.BASEURL;
    this.getallsdriver();
    this.contents = undefined;

  }
  getallsdriver()
  {
    this.ownerservice.getalldrivers(this.ownerId).subscribe(
      data =>{
        console.log(data)
        this.driverslist =data;
      },
      error =>{
        
      }
    )
  }
  getlicsence(id)
  {
    console.log(id)
    this.Id = id
    this.ownerservice.getliscncefront(id);
    // this.router.navigate(['/view-licsense',id]);
  }
//   createImageFromBlob(image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => {
//        this.imageToShow = reader.result;
//        console.log(this.imageToShow)
//     }, false);
 
//     if (image) {
//        reader.readAsDataURL(image);
//     }
//  }
//  getImageFromService() {
//   this.ownerservice.getliscncefront(this.Id).subscribe(data => {
//     this.createImageFromBlob(data);
//   }, error => {
//     console.log(error);
//   });
// }
}
