import { Marca } from "./marca"
import { Modelo } from "./modelo"

export interface Bateria{
  id:number
  tipodeBateria:string
  tipodeCarga:string
  capacidad:number
  marca:Marca
  modelo:Modelo
}
