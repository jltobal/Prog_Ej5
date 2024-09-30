import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
    cantPuertas: any;

    constructor(marca, modelo, anio, cantPuertas) {
      super(marca, modelo, anio);
      this.cantPuertas = cantPuertas;
    }
    setCantPuertas(cantPuertas) {
      this.cantPuertas = cantPuertas;
    }
    getCantPuertas() {
      return this.cantPuertas;
    }
  }