import { Marca } from "./marca"
import { Modelo } from "./modelo"

export interface Pantalla{
  id:number
  pulgadas:number
  marca:Marca
  modelo:Modelo
}
