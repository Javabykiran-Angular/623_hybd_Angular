import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childArrObjEvent=new EventEmitter();

  @Output() childDateDataEvent=new EventEmitter()

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

  onSend(){
    this.childArrObjEvent.emit(this.arrProduct);
  }

  onSendDate(datevalue:string){
    this.childDateDataEvent.emit(datevalue);
  }

}
