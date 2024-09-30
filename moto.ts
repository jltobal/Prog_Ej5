import { Vehiculo } from "./vehiculo";
export class Moto extends Vehiculo {
    cilindrada: any;    

    constructor(marca, modelo, anio, cilindrada) {
      super(marca, modelo, anio);
      this.cilindrada = cilindrada;
    }
    setCilindrada(cilindrada) {
      this.cilindrada = cilindrada;
    }
    getCilindrada() {
      return this.cilindrada;
    }
  }