import { Vehiculo } from "./vehiculo";
import {Auto} from "./auto";
import {Camioneta} from "./camioneta";
import {Moto} from "./moto";
import { RegistroAutomotor } from "./registroAutomotor";

let registro = new RegistroAutomotor();

const auto = new Auto("Chevrolet", "Corsa", 2008, 5);
const camioneta = new Camioneta("Ford", "Maverick", 2024, 1500);
const moto = new Moto("Yamaha", "SR1000", 2022, 1150);

registro.agregarVehiculo(auto);
registro.agregarVehiculo(camioneta);
registro.agregarVehiculo(moto);

console.log(JSON.stringify(registro.listarVehiculos()));

const auto1 = new Auto("Fiat", "Spazio CL", 1987, 3);
registro.modificarVehiculo(0, auto1);

console.log(JSON.stringify(registro.listarVehiculos()));

registro.eliminarVehiculo(1);

console.log(JSON.stringify(registro.listarVehiculos()));

