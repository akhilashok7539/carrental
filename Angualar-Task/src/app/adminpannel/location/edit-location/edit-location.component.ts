import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  locationForn:FormGroup;
  Location;
  formData = new FormData();
  Id: any;
  constructor(private fb :FormBuilder,private activaterouter:ActivatedRoute,
    private router:Router,private adminservice:AdminService) { }

  ngOnInit() {
    this.locationForn = this.fb.group({
      Location :['',Validators.required]
    })
    this.activaterouter.params.subscribe(params =>{
      console.log(params)
      this.Location = params.name;
      this.Id = params.id;
    })
  }
  submit()
  {
    this.formData.append('id',this.Id);
    this.formData.append('name',this.Location);
    this.adminservice.Editlocation(this.formData).subscribe(
      data =>{
        this.router.navigate(['/locations']);
      },  
      error =>{
        this.formData.delete;
      }
    )
  }
}
