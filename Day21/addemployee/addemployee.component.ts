import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addData : Employee=<Employee>{};
  allcountry:any[]=[];

  constructor(private service:HttpService,
              private router:Router
  ){

  }
  ngOnInit(): void {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allcountry=response;
    })
  }


  onSubmit(){
    this.addData.createdby="Admin";
    this.addData.createddtm=Date.now();
    this.addData.updatedby="Admin";
    this.addData.updateddtm=Date.now();

    this.service.PostEmpData(this.addData)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate([""]);
    })
    
  }

}
