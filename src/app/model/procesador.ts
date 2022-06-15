import { Marca } from "./marca"
import { Modelo } from "./modelo"

export interface Procesador{
  id:number
  nucleos:number
  velocidad:number
  marca:Marca
  modelo:Modelo
}
