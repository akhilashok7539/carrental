import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  locationForn:FormGroup;
  Location;
  formData = new FormData();

  constructor(private fb :FormBuilder,private router:Router,private adminservice:AdminService) { }

  ngOnInit() {
    this.locationForn = this.fb.group({
      Location :['',Validators.required]
    })
  }
  submit(){
    this.formData.append('name',this.Location);
    this.adminservice.addlocation(this.formData).subscribe(
      data =>{
        this.router.navigate(['/locations']);
      },  
      error =>{
        this.formData.delete;
      }
    )
  }
}
