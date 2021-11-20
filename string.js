// para o JS a string é um objeto
// .length > conta todos os caracteres incluindo os espaços

// console.log("Oi eu sou a Mariana".length);
/* retorna 19 pois conta as letras e os espaços. */




// .indexOf > busca a palavra e conta o local que ela está (incluindo os espaços)

let texto = "Oi meu nome é Mariana"
// console.log(texto.indexOf("Mariana"));
/* retorna 14 pois contando de "Oi" até "é" são 14 letras e espaços até chegar em "Mariana"
sempre que o indexOf não localizar uma palavra, ele retornará -1 */




// .slice > 

// console.log(texto.slice(0, 3));
/* retorna o "Oi" pois o slice pega somente o pedaço que solicitamos por números
neste caso ele conta do 0 que começa no "O" e vai até o espaço antes do "meu nome é" */



// .trim

// console.log(texto.trim())
/* .trim > a função do trim é remover espaços em branco,
antes e depois da primeira palavra,
essa funão NÃO remove os espaços ENTRE as palavras, somente antes e depois. */



// .split 

// console.log(texto.split(" "))
/* .split > serve para transformar uma STRING em um ARRAY [] */



// .replace

console.log(texto.replace("Mariana", "Ana Maria"));
/* isso nos retorna "Ana Maria" pois o replace substitiu o "Mariana" */