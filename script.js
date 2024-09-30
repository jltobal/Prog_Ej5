/*
Ejercicio 5
Implementar la clase RegistroAutomotor (Autos, Camionetas, Motos) y deben tener los metodos:
AgregarVehiculo, get y set, modificar y dar de baja un vehiculo.
Incorporando los conceptos: encapsulamientoy y composicion
*/

/*****************REGISTRO AUTOMOTOR*********************/
class RegistroAutomotor {
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

/*****************VEHICULO*********************/
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  #marca;
  #modelo;
  #anio;

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

/*****************AUTO*********************/
class Auto extends Vehiculo {
  constructor(marca, modelo, anio, cantPuertas) {
    super(marca, modelo, anio);
    this.cantPuertas = cantPuertas;
  }
  setCantPuertas(cantPuertas) {
    this.cantPuertas = cantPuertas;
  }
  getCantPuertas() {
    return this.cantPuertas;
  }
}
/*****************CAMIONETA*********************/
class Camioneta extends Vehiculo {
  constructor(marca, modelo, anio, capCarga) {
    super(marca, modelo, anio);
    this.capCarga = capCarga;
  }
  setCapCarga(capCarga) {
    this.capCarga = capCarga;
  }
  getCapCarga() {
    return this.capCarga;
  }
}
/*****************MOTO*********************/
class Moto extends Vehiculo {
  constructor(marca, modelo, anio, cilindrada) {
    super(marca, modelo, anio);
    this.cilindrada = cilindrada;
  }
  setCilindrada(cilindrada) {
    this.cilindrada = cilindrada;
  }
  getCilindrada() {
    return this.cilindrada;
  }
}

/*****************MAIN*********************/

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

