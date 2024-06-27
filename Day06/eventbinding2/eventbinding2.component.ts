import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {

  result:number=0;
  name:string='';
  username:string='';
  password:string='';

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;
  }

  onLogin(){

    if(this.username=="admin" && this.password=="admin" ){
      alert("Login Successfully");
    }else{
      alert("Wrong username & password");
    }

  }

}
