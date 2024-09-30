"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camioneta = void 0;
var vehiculo_1 = require("./vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, anio, capCarga) {
        var _this = _super.call(this, marca, modelo, anio) || this;
        _this.capCarga = capCarga;
        return _this;
    }
    Camioneta.prototype.setCapCarga = function (capCarga) {
        this.capCarga = capCarga;
    };
    Camioneta.prototype.getCapCarga = function () {
        return this.capCarga;
    };
    return Camioneta;
}(vehiculo_1.Vehiculo));
exports.Camioneta = Camioneta;
