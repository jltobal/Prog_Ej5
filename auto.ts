// auto.ts
import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo {
    private cantPuertas: number;

    constructor(marca: string, modelo: string, anio: number, cantPuertas: number) {
        super(marca, modelo, anio);
        this.cantPuertas = cantPuertas;
    }

    setCantPuertas(cantPuertas: number) {
        this.cantPuertas = cantPuertas;
    }

    getCantPuertas(): number {
        return this.cantPuertas;
    }
}
