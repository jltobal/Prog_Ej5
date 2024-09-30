import { Vehiculo } from "./vehiculo";
export class Camioneta extends Vehiculo {
    capCarga:any;
    constructor(marca, modelo, anio, capCarga) {
      super(marca, modelo, anio);
      this.capCarga = capCarga;
    }
    setCapCarga(capCarga) {
      this.capCarga = capCarga;
    }
    getCapCarga() {
      return this.capCarga;
    }
  }