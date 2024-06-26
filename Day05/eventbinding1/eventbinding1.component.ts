import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  count:number=0;
  onClick(){

    if(this.count==0){
      console.log("Click Event Occur...");
      this.count++;
    }    
  }

  onImage(){
    console.log("On Image Click...")
  }

  onSend(myname:string){
    console.log(myname);
  }

  onSend1(myinputname1:any){
    console.log(myinputname1);

    myinputname1.style.background='green';
    myinputname1.style.color="white";

  }

}
