import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private course:string[]=["Core Java","Html","CSS","JS","MySql","Advanced Java","Hibernate","Spring Core","Spring Boot","Spring MVC","Angular 16","AWS","Docker","Jenkings"];


  constructor() { }

  getCourse(){
    return this.course;
  }

  


  
}
