import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from '../../owner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewliscence',
  templateUrl: './viewliscence.component.html',
  styleUrls: ['./viewliscence.component.css']
})
export class ViewliscenceComponent implements OnInit {
  id:any;
  constructor(private acttivatrouter:ActivatedRoute,private http:HttpClient,
    private onerservice:OwnerService) { }

  ngOnInit() {
    this.acttivatrouter.params.subscribe(params =>{
      console.log(params)
      this.id = params.id;
      this.http.get('http://localhost:8080/server/driver/getLicenceFront/' + this.id)

    })
  }
  getimag(){
    this.onerservice.getliscncefront(this.id);
  }
}
