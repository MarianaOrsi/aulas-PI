for (let i = 0; i <= 4; i++) {
    // console.log(i);
}

/* Crie um loop utilizando for que se repita 5 vezes. 
Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”. */
for (let helloWorld = 1; helloWorld <= 5; helloWorld++) {
    // console.log("Olá Mundo");
}

//Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares.
for (let num = 0; num <= 10; num++) {
    if (num % 2 != 0) {

        // console.log("O número " + num + " é ímpar");
    }
}

//Crie uma tabuada utilizando o for. 
let valor = 1;
for (let a = 1; a <= 10; a++) {

    console.log("\nEssa é a tabuada do " + valor);

    for (let b = 1; b <= 10; b++) {
        console.log(valor + " x " + b + " = " + valor * b);

    }
    valor = valor + 1;
}
