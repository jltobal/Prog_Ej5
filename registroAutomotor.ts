import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor {
    vehiculos: any;

    constructor() {
      this.vehiculos = [];
    }
  
    agregarVehiculo(vehiculo) {
      this.vehiculos.push(vehiculo);
      console.log("Vehiculo Agregado");
    }
  
    modificarVehiculo(posicion, vehiculo) {
      if (posicion >= 0 && posicion < this.vehiculos.length) {
        this.vehiculos[posicion] = vehiculo;
        console.log("Vehiculo modificado");
      } else {
        console.log("posicion incorrecta");
      }
    }
  
    eliminarVehiculo(posicion) {
      if (posicion >= 0 && posicion < this.vehiculos.length) {
        for (let i = posicion; i < this.vehiculos.length; i++) {
          this.vehiculos[i] = this.vehiculos[i + 1];
        }
        this.vehiculos[this.vehiculos.length - 1] = undefined;
        console.log("vehiculo eliminado");
      } else {
        console.log("posicion incorrecta");
      }
    }
  
    listarVehiculos() {
      return this.vehiculos;
    }
  }