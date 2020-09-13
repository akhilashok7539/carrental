import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registeruser } from '../_models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpageformarketing',
  templateUrl: './registerpageformarketing.component.html',
  styleUrls: ['./registerpageformarketing.component.css']
})
export class RegisterpageformarketingComponent implements OnInit {
  publicreisterform: FormGroup;
  public registerModel: Registeruser;
  formData = new FormData();
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,
    private router: Router) {

  }
  ngOnInit() {
    this.registerModel = new Registeruser();
    this.publicreisterform = this.formBuilder.group({
      name: ['', Validators.required],
      mobNo: ['', Validators.required],
      email: ['', Validators.required],
     
      address: ['', Validators.required],
     
    })
  }
  register() {
    this.formData.append('name',this.registerModel.name);
    this.formData.append('emailId',this.registerModel.email);
    this.formData.append('mobile',this.registerModel.mobNo);
    this.formData.append('address',this.registerModel.address);

    this.loginservice.userpublicregister(this.formData).subscribe(
      data =>{
        alert('Registration Successfully');
      },
      error =>{
        this.formData.delete;
        alert('Registration Unsuccessfull');

       
      }
    )
  }
}
