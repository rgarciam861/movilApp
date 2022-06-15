import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../model/CustomResponse';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {
private readonly url='http://localhost:8080';
  constructor(protected http:HttpClient) { }


  getMovils(access_token?:string):Observable<CustomResponse>{
    let options = this.option(access_token)
    return this.http.get<CustomResponse>(this.url+'/Telefonia/list',options)
  }
  getResumen(access_token?:string):Observable<CustomResponse>{
    let options = this.option(access_token)
    return this.http.get<CustomResponse>(this.url+'/Telefonia/Resumen',options)
  }


  public option(access_token?:string){
    let options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer' + ' ' + access_token,
      }),
      withCredentials: true,
    };
    return options;
  }





}
