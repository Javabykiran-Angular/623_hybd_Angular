import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}

  getAllRecord() {
    return this.http.get(`${this.baseUrl}getallemp`);
  }

  getParticularDataById(id:any){
    return (this.http.get(`${this.baseUrl}getempbyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

  PostEmpData(obj:any){
     return (this.http.post(`${this.baseUrl}addemp`,obj,{
        responseType:'text'
      }));
  }

  UpdateData(obj:any){
   return (this.http.put(`${this.baseUrl}updateemp`,obj,{
      responseType:'text'
    }));
  }

  deleteData(id:any){
   return (this.http.delete(`${this.baseUrl}deleteemp/${id}`,{
      responseType:'text'
    }));
  }

}
