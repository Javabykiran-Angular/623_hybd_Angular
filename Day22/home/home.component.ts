import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  empData: any[] = [];
  isSelect:boolean=false;
  recordId!:number;
  constructor(private service: HttpService,
              private router:Router
  ) {}

  ngOnInit(): void {
    this.GetAllRecordFromBackend();
  }

  GetAllRecordFromBackend() {
    this.service.getAllRecord().subscribe((response: any) => {
      // console.log(response);
      this.empData = response;
    });
  }

  onEdit(id:any){
    console.log(id);
    this.isSelect=true;
    this.recordId=id;
  }
  onUpdate(){
    if(this.isSelect){
      // navigate to add employee
          this.router.navigate(['/addemp',this.recordId]);
    }else{
      alert("Please Select a Record to be Update...")
    }
  }

  onDelete(){
    if(this.isSelect){
      //Delete

      if(confirm("Do you want Delete this record")){
        this.service.deleteData(this.recordId)
        .subscribe((response)=>{
          this.GetAllRecordFromBackend();
          alert(response)
        });
      }else{
        alert("Record is Not Deleted...")
      }

      
    }else{
      alert("Please Select a record to delete....")
    }
  }

}
