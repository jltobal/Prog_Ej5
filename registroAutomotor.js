"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
        console.log("Vehiculo Agregado");
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (posicion, vehiculo) {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            this.vehiculos[posicion] = vehiculo;
            console.log("Vehiculo modificado");
        }
        else {
            console.log("posicion incorrecta");
        }
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (posicion) {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            for (var i = posicion; i < this.vehiculos.length; i++) {
                this.vehiculos[i] = this.vehiculos[i + 1];
            }
            this.vehiculos[this.vehiculos.length - 1] = undefined;
            console.log("vehiculo eliminado");
        }
        else {
            console.log("posicion incorrecta");
        }
    };
    RegistroAutomotor.prototype.listarVehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
