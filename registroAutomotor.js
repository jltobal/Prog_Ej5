"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado con éxito.");
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (posicion, vehiculo) {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            this.vehiculos[posicion] = vehiculo;
            console.log("Vehículo modificado con éxito.");
        }
        else {
            console.log("Posición incorrecta.");
        }
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (posicion) {
        if (posicion >= 0 && posicion < this.vehiculos.length) {
            this.vehiculos.splice(posicion, 1);
            console.log("Vehículo eliminado con éxito.");
        }
        else {
            console.log("Posición incorrecta.");
        }
    };
    RegistroAutomotor.prototype.listarVehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
