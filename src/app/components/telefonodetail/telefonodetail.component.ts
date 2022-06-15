import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/model/CustomResponse';
import { Telefono } from 'src/app/model/telefono';
import { TelefonoService } from 'src/app/services/telefono.service';
import { UserAutenticationService } from 'src/app/services/user-autentication.service';
import { TelefonoComponent } from '../telefono/telefono.component';

@Component({
  selector: 'app-telefonodetail',
  templateUrl: './telefonodetail.component.html',
  styleUrls: ['./telefonodetail.component.css']
})
export class TelefonodetailComponent implements OnInit {
  id!:number
  public _authenticated = false;
  public accessToken!: string;
  public refreshToken!: string;
  Telefono:Array<Telefono>=[]
  moviles$!: Observable<CustomResponse>
  constructor(private route:ActivatedRoute,private userautentic:UserAutenticationService,private service:TelefonoService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.userautentic.authenticate("luis","123").forEach(
      (respond)=>{
        console.log("asociando un token");

        this.accessToken =respond.access_token;
        this.refreshToken=respond.refresh_token;
        this._authenticated=true;
        this.getMovils()
        this.getByid(this.id)
        //  this.getMovils(this._authenticated)
  });

  }
  getMovils(){
    console.log("antes del token")
    console.log(this._authenticated)
    setTimeout(()=>{},1000);
    if(this._authenticated){

        this.moviles$=this.service.getMovils(this.accessToken)





}
}
getByid(id:number):Array<Telefono>{
  this.moviles$.subscribe(lista=>{
    lista.data.moviles.filter((movil)=>{

      if(movil.id==id){
        this.Telefono.push(movil)
      }
    })
  })
  return this.Telefono
}


}
