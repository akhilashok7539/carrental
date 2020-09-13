import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  userDetails: any;
  userId: any;
  carList: any = [];
  apUrl: any;

  constructor(private ownerserivice:OwnerService,private router:Router) {
    this.apUrl = environment.BASEURL;
   }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetail'))
    this.userId = this.userDetails['userId'];
    this.getallcarsbyowers();
  }
  getallcarsbyowers()
  {
    this.ownerserivice.getallcars(this.userId).subscribe(
      data =>{
        this.carList =data;
      },
      error =>{

      }
    )
  }
  edit(e)
  {
    this.router.navigate(['/edit-car',e.id]);
  }
}
