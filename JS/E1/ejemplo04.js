let auto1 = {
    fabricante : "Toyota",
    modelo : "RAV4",
    color : "Rojo",
    cilindrada : 2.0,
    detalle() {
        console.log("Fabricante: "+this.fabricante+ " Modelo: "+this.modelo);
    },
    detalle2() {
        console.log("Color: "+this.color+ " Cilindrada: "+this.cilindrada);
    }

}
auto1.detalle();
auto1.detalle2();
document.write("<h2>FIS UNCP</h2>");
