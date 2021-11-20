let pessoa = {
    nome: "Mariana",
    idade: 25,
    altura: 1.67,
}

let json = JSON.stringify(pessoa); //retorna em string
console.log(json);

let objetoDeNovo = JSON.parse(json) //retorna em objeto
console.log(objetoDeNovo);
