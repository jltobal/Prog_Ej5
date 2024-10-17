export abstract class Vehiculo {
    private marca:string;
    private modelo: string;
    private anio: number;
    
    constructor(marca, modelo, anio) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
  
    setMarca(marca) {
      this.marca = marca;
    }
    setModelo(modelo) {
      this.modelo = modelo;
    }
    setAnio(anio) {
      this.anio = anio;
    }
    getMarca() {
      return this.marca;
    }
    getModelo() {
      return this.modelo;
    }
    getAnio() {
      return this.anio;
    }
  
  }