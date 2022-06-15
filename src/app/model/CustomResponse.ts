import { Telefono } from "./telefono";
import { telefonoResumen } from "./telefonoResumen";

export interface CustomResponse{
  timestamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessage: string;
  data: { moviles : Telefono[],moviles2:telefonoResumen[]};
}
