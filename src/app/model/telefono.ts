import { Bateria } from "./bateria"
import { Complementos } from "./complementos"
import { Marca } from "./marca"
import { Modelo } from "./modelo"
import { Pantalla } from "./pantalla"
import { Procesador } from "./procesador"
import { Ram } from "./ram"

export interface Telefono{
  id:number
  ram:Ram
  peso:number
  nombre:string
  almacenamiento:number
  materialFabricacion:string
  marca:Marca
  modelo:Modelo
  bateria:Bateria
  procesador:Procesador
  pantalla:Pantalla
  complementos:Array<Complementos>
}
