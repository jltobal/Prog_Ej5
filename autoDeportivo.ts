import { Auto } from "./auto";

export class AutoDeportivo extends Auto {
    private caballosFuerza: number;

    constructor(marca, modelo, anio, cantPuertas, caballosFuerza) {
      super(marca, modelo, anio, cantPuertas);
      this.caballosFuerza = caballosFuerza;
    }
    setCaballosFuerza(caballosFuerza) {
      this.caballosFuerza = caballosFuerza;
    }
    getCaballosFuerza() {
      return this.caballosFuerza;
    }
  }