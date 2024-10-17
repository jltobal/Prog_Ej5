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
exports.AutoDeportivo = void 0;
var auto_1 = require("./auto");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, anio, cantPuertas, caballosFuerza) {
        var _this = _super.call(this, marca, modelo, anio, cantPuertas) || this;
        _this.caballosFuerza = caballosFuerza;
        return _this;
    }
    AutoDeportivo.prototype.setCaballosFuerza = function (caballosFuerza) {
        this.caballosFuerza = caballosFuerza;
    };
    AutoDeportivo.prototype.getCaballosFuerza = function () {
        return this.caballosFuerza;
    };
    return AutoDeportivo;
}(auto_1.Auto));
exports.AutoDeportivo = AutoDeportivo;
