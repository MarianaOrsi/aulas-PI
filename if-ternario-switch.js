/* O if ternário é uma variante de apenas uma linha do if comum.

Com ela, é possível ter apenas duas opções de valor 
– que corresponde ao if else – e retornar apenas valores, 
não podendo executar comandos ou chamadas de funções.

O Switch, por sua vez, também é uma estrutura condicional, 
que possui uma sintaxe dedicada para situações que possuem múltiplas condições ou casos. 
Isso acontece porque criar diversos else if para várias condições, 
pode acabar dificultando a leitura e visualização do código.

O Switch é, portanto, uma boa solução para esses cenários, 
pois a sua sintaxe é mais legível, se comparada ao if. 

Outra coisa importante é que o if ternário não executa funções, 
apenas retorna valores que podem ser atribuídos em alguma variável. */


// IF TERNÁRIO:

let dia = "segunda";

let resultado = dia == "domingo" ? "vou a praia" : "vou ficar em casa";
// console.log(resultado);



// SWITCH 

switch (dia) {
    case "segunda":
        console.log("Vou tomar café");
        break;

    case "quarta":
        console.log("Vou ao mercado");
        break;

    default:
        console.log("Vou ficar em casa");
}