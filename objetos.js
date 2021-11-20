//Aula 13 | Objetos Literais.
let pais = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function() {
        return "Sou do " + this.nome;
    }
};
// console.log(pais.nacionalidade());

let carro ={
    marca: "Fiat",
    modelo: "Uno",
}

function Carro(valorMarca, valorModelo) {
    this.marca = valorMarca;
    this.modelo = valorModelo;
}

console.log(carro);
console.log(new Carro("Renault", "Logan"));