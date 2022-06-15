import { Marca } from "./marca"
import { Modelo } from "./modelo"

export interface Bateria{
  id:number
  tipoDeBateria:string
  tipoDeCarga:string
  capacidad:number
  marca:Marca
  modelo:Modelo
}
