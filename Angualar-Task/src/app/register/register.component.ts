import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registeruser } from '../_models/register';
import { Router } from '@angular/router';
import { MustMatch } from './password-validation';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public registerModel: Registeruser;
  hide;
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,
    private router: Router) {

  }

  ngOnInit() {
    this.registerModel = new Registeruser();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      Confirmpassword: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
    },
    {
      validator: MustMatch('password', 'Confirmpassword')
    })
    // this.registerModel.email = "@gmail.com";
  }
  register(){
    // alert('User Registration successfully');
    // console.log(this.registerForm.value);
    // this.registerForm.reset();
    let req ={
      "name":this.registerModel.name,
      "userName":this.registerModel.username,
      "emailId":this.registerModel.email,
      "password":this.registerModel.password,
      "mobile":this.registerModel.mobNo,
      "addres":this.registerModel.address,
      "roleId":2
    }
    console.log(req)
    this.loginservice.register(req).subscribe(
      data =>{
        alert('Register Successfully');
        this.router.navigate(['/login']);
      },
      error =>{

      }
    )
  }
}
