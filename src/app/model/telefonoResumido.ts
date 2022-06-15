import { Marca } from "./marca";
import { Modelo } from "./modelo";
import { telefonoResumen } from "./telefonoResumen";

export class telefonoResumido implements telefonoResumen{
  constructor(public id:number,public marca:Marca, public modelo:Modelo,public almacenamiento:number){

  }
}
