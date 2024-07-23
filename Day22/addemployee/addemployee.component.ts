import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addData : Employee=<Employee>{};
  allcountry:any[]=[];
  isUpdate:boolean=false;

  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.GetAllCountry();
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
    this.route.paramMap
    .subscribe((param:any)=>{
      //console.log(param.get("id"));
      this.service.getParticularDataById(param.get("id"))
      .subscribe((response:any)=>{
        // console.log(response);
        this.addData=response;
        this.isUpdate=true;
      })
    })
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allcountry=response;
    })
  }


  onSubmit(){

    if(this.isUpdate){
      // Update a record
      this.addData.updatedby="Admin";
      this.addData.updateddtm=Date.now();
      this.service.UpdateData(this.addData)
      .subscribe((response)=>{
        this.router.navigate(['']);
      })

    }else{
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

}
