import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomResponse } from 'src/app/model/CustomResponse';
import { Marca } from 'src/app/model/marca';
import { Modelo } from 'src/app/model/modelo';
import { Telefono } from 'src/app/model/telefono';
import { telefonoResumen } from 'src/app/model/telefonoResumen';
import { telefonoResumido } from 'src/app/model/telefonoResumido';
import { TelefonoService } from 'src/app/services/telefono.service';
import { UserAutenticationService } from 'src/app/services/user-autentication.service';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.css']
})
export class TelefonoComponent implements OnInit {
  moviles$!: Observable<CustomResponse>
  movilesResumen$!: Observable<CustomResponse>
  moviles:Array<telefonoResumen>=[]
  id!:number
  public _authenticated = false;
  public accessToken!: string;
  public refreshToken!: string;

  constructor(private service:TelefonoService,private userautentic:UserAutenticationService,private route:Router) {
    // this.userautentic.authenticate("luis","123")
  }

  ngOnInit(): void {

    console.log(this.userautentic.authenticate("luis","123"))
    this.userautentic.authenticate("luis","123").forEach(
      (respond)=>{
        console.log("asociando un token");

        this.accessToken =respond.access_token;
        this.refreshToken=respond.refresh_token;
        this._authenticated=true;
        //  this.getMovils(this._authenticated)
        // this.getResumen()
       this.getMovils()
        this.resumir()
  });

  }


    getMovils(){
      console.log("antes del token")
      console.log(this._authenticated)
      setTimeout(()=>{},1000);
      if(this._authenticated){

          this.moviles$=this.service.getMovils(this.accessToken)
          console.log(this.moviles$.subscribe(lista=>{
            console.log(lista.data.moviles)
          })
          )


  }
}

resumir(){
  var id:number
  var marca:Marca
  var modelo:Modelo
  var almacenamiento:number
  this.moviles$.subscribe((lista)=>{
    lista.data.moviles.forEach((tf)=>{
      id=tf.id
      marca=tf.marca
      modelo=tf.modelo
      almacenamiento=tf.almacenamiento
     let telefono= new telefonoResumido(id,marca,modelo,almacenamiento);
     console.log(telefono)

     this.moviles.push(telefono)
    })

  })
}




}
