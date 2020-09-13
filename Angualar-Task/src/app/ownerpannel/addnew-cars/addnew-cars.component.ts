import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Vehicle } from 'src/app/_models/vehicle';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew-cars',
  templateUrl: './addnew-cars.component.html',
  styleUrls: ['./addnew-cars.component.css']
})
export class AddnewCarsComponent implements OnInit {
  rcproof: any;
  image1:any;
  image2:any;
  files: any;
  img1:any;
  img2:any;
  lisence1:any;
  lisence2:any;
  lisencefrnt:any;
  lisenceback:any;

  addVehiclesform:FormGroup;
  formData = new FormData();
  public vehicleModel:Vehicle;
  locations:any = [];
  ownerId;
  ownerdetails;
  constructor(private fb:FormBuilder,private router:Router,
    private owenerservice:OwnerService) { }

  ngOnInit() {
    this.vehicleModel =new Vehicle();
    this.vehicleModel.locality = '';
    this.vehicleModel.vehicleType = '';
    this.vehicleModel.driver = '';

    this.addVehiclesform = this.fb.group(
      {
        vehicleType:['',Validators.required],
        vehicleModel:['',Validators.required],
        vehicleYear:['',Validators.required],
        vehicleCompany:['',Validators.required],
        vehicleRegistration:['',Validators.required],
        locality:['',Validators.required],
        rent:['',Validators.required],
        driver:[''],


      }
    )
    this.ownerdetails = JSON.parse(localStorage.getItem('userDetail'));
    this.ownerId = this.ownerdetails['userId'];
    console.log(this.ownerId)
    this.getalllocality();
  }
  getalldrivers(){

  }
  getalllocality(){
    this.owenerservice.getalllocality().subscribe(
      data =>{
        console.log(data)
        this.locations = data;
      },
      error =>{

      }
    )
  }
  addrcimage(event) {

    this.files = event.target.files;
    this.rcproof = this.files.item(0);
    
  }
  addimage1(event){
    this.img1 = event.target.files;
    this.image1 = this.img1.item(0);
  }
  addimage2(event){
    this.img2 = event.target.files;
    this.image2 = this.img2.item(0);
  }
  addliscensefrnt(event){
    this.lisence1 = event.target.files;
    this.lisencefrnt = this.lisence1.item(0);
  }
  addliscenseback(event){
    this.lisence2 = event.target.files;
    this.lisenceback = this.lisence2.item(0);
  }
  submit(){
    this.formData.append('type',this.vehicleModel.vehicleType);
    this.formData.append('companyName',this.vehicleModel.vehicleCompany);
    this.formData.append('model',this.vehicleModel.vehicleModel);
    this.formData.append('year',this.vehicleModel.vehicleYear);
    this.formData.append('numberPlate',this.vehicleModel.vehicleRegistration);
    this.formData.append('locality',this.vehicleModel.locality);
    this.formData.append('rentPerDay',this.vehicleModel.rent);
    this.formData.append('ownerId',this.ownerId);
    this.formData.append('licenceFront',this.lisencefrnt);
    this.formData.append('licenceBack',this.lisenceback);
    this.formData.append('rcImage',this.rcproof);
    this.formData.append('image1',this.image1);
    this.formData.append('image2',this.image2);
    this.formData.append('driverId',this.vehicleModel.driver);

    console.log(this.formData)
    this.owenerservice.addnewvehicle(this.formData).subscribe(
      data =>{
        alert('Success')
        this.router.navigate(['/vehicles'])
      },
      error =>{
        alert('error')
        this.formData.delete;

      }
    )
  }
}
