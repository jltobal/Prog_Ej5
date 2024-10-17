import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor<T extends Vehiculo> {
    protected vehiculos: T[];

    constructor() {
        this.vehiculos = [];
    }
  
    agregarVehiculo(vehiculo: T): void {
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado con éxito.");
    }
  
    modificarVehiculo(posicion: number, vehiculo: T): void {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            this.vehiculos[posicion] = vehiculo;
            console.log("Vehículo modificado con éxito.");
        } else {
            console.log("Posición incorrecta.");
        }
    }
  
    eliminarVehiculo(posicion: number): void {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            this.vehiculos.splice(posicion, 1);
            console.log("Vehículo eliminado con éxito.");
        } else {
            console.log("Posición incorrecta.");
        }
    }
  
    listarVehiculos(): T[] {
        return this.vehiculos;
    }
}
