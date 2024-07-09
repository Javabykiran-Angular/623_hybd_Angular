import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  mytitle:string='';
  myid!:number;
  mybody!:string;
  isHidden:boolean=true;

  constructor(private service:HttpService){}

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){

    this.service.getPost()
    .subscribe((myresponse:any)=>{
        console.log(myresponse);
        this.posts=myresponse;
    })

  }

  onSend(mytitle:string,mybody:string){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.SendData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onEdit(item:any){
    console.log(item);

    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
    this.isHidden=false;

  }

  onUpdate(){

    let obj={
      id:this.myid,
      title:this.mytitle,
      body:this.mybody
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }



}
