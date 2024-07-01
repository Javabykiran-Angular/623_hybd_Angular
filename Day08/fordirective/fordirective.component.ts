import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  arrProduct:any[]=[
    {
      name:'Apple',
      price:"100000",
      qty:1
    },
    {
      name:'Samsung',
      price:"25000",
      qty:1
    },
    {
      name:'RealMe',
      price:"18000",
      qty:1
    },
    {
      name:'Motorola',
      price:"30000",
      qty:1
    }
  ];


}
