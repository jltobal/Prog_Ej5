export abstract class Vehiculo {
    marca:any;
    modelo: any;
    anio: any;
    
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