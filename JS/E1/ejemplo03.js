function Automovil(fabricante, modelo, color, cilindrada) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.color = color;
    this.cilindrada = cilindrada;
}
let auto1 = new Automovil("Toyota", "RAV4", "Rojo", 2.4);
console.log(auto1.fabricante);
