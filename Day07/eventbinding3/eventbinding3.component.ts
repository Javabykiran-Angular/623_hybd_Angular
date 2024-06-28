import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {


  onChange(text1:any){
    console.log("Change Event Occur.... "+text1)
  }

  onKeyUp(){
    console.log("Key Up Event Is occur...")
  }

  onKeyDown(){
    console.log("Key Down Event Occur...")
  }

}
