let dia = "domingo";

if (dia == "domingo") {
    console.log("Vou para praia!");
} else if (dia == "sexta") {
    console.log("Vou ao cinema");
} else if (dia == "sabado") {
    console.log("Vou ao parque")
}
else {
    console.log("Fico em casa!");
}

/* Tenha em mente:
- a condição IF nem sempre precisa de um ELSE IF ou ELSE.

- podemos ter muitos ELSE IF, quantos forem necessários.

- sempre que implementamos um ELSE ele será único.

- a condição ELSE IF sempre vem antes do ELSE para testar mais de duas opções.
então sempre será primeiro o IF depois o ELSE IF e depois o ELSE. */