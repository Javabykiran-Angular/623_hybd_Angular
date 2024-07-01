import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent {
choice:string='';

  onSend(colorname:string){
    this.choice=colorname.toLowerCase().trim();
  }
}
