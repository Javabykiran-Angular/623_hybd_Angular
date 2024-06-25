import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  name:string='Sumit Raokhande';

  imgUrl:string='../../assets/tka.jpeg';

  ishidden:boolean=false;

}
