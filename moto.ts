import { Vehiculo } from "./vehiculo";
export class Moto extends Vehiculo {
    private cilindrada: number;    

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