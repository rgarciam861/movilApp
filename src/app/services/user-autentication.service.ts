import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Token } from '../model/token';
import { Observable } from 'rxjs';
import { CustomResponse } from '../model/CustomResponse';

@Injectable({
  providedIn: 'root'
})
export class UserAutenticationService {
  private readonly apiUrl = 'http://localhost:8080';
  moviles$!:Observable<CustomResponse>

  // private _user?:User;
  constructor(private http: HttpClient) {}
   authenticate(username: string, password: string):Observable<Token> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
      params: new HttpParams()
        .set('username', username)
        .set('password', password),
      withCredentials: true,
    };

      return this.http.post<Token>(this.apiUrl+"/login", null, options);


  }
  // getAccessToken(username:string,password:string){
  //   this._authenticated = false;
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  //     }),
  //     params: new HttpParams()
  //       .set("username",username)
  //       .set("password",password)
  //   }
  //   this.http.post<User>(this.apiUrl+"/login",null,httpOptions).subscribe(user=>{
  //     this._user = user;
  //     this._authenticated = true;
  //   });

  // }
  // public get authenticated(){
  //   return this._authenticated;
  // }

  // public  accessToken(){
  //   return  this._user?.tokens.access_token;
  // }
  }


