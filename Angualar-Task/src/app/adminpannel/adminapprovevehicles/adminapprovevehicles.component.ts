import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminapprovevehicles',
  templateUrl: './adminapprovevehicles.component.html',
  styleUrls: ['./adminapprovevehicles.component.css']
})
export class AdminapprovevehiclesComponent implements OnInit {
  results: any;
  searchString: any;

  displayedColumns = ['vname','vnumber','name','approve'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  formData = new FormData();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: any = 'data found';
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getallvehiclesforapproval();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filteredData.length)
    if(this.dataSource.filteredData.length == 0 )
    {
      this.message = 'No data found';
    }
  }
  getallvehiclesforapproval(){
    
    this.adminservice.getallvehicles(this.pageIndex).subscribe(
      data =>{
        this.results = data;
        this.dataSource.data = this.results;
      },
      error =>{
        this.dataSource = new MatTableDataSource();
      }
    )
  }
  approve(elemet){
    this.formData.append('vehicleId',elemet.id);
    this.formData.append('status',"1");
    this.adminservice.approve(this.formData).subscribe(
      data =>{
        alert('Vehicle Approved')
        this.ngOnInit();
      },
      error =>{

      }
    )
  }
  reject(elemet){
    this.formData.append('vehicleId',elemet.id);
    this.formData.append('status',"3");
    this.adminservice.reject(this.formData).subscribe(
      data =>{
        alert('Vehicle Rejected')
        this.ngOnInit();
      },
      error =>{

      }
    )
  }
  changePage(event)
  {
    this.adminservice.getallvehicles(event.pageIndex).subscribe(
      data =>{
        this.results = data;
        this.dataSource.data = this.results;
      },
      error =>{
        this.dataSource = new MatTableDataSource();
      }
    )
  }

}
