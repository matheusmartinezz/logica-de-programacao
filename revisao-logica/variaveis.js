// OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior, é necessário:
1 Precisa ser maior de 18 anos
OU
Estar acompanhado dos pais
*/ 

let idade = 21;
let paisPresentes = false;
let ComprouBilhete = false;
const podeViajar = idade >= 18 || (paisPresentes && ComprouBilhete);

console.log('Pode Viajar: ${podeViajar}');

if (!ComprouBilhete){
    console.log("O usuário não possui o bilhete")
} else {
    if (idade >= 18) {
        console.log("O usuário é maior de 18 anos, portanto é permitido sua embarcação!");
    } else {
        console.log("O usuário é menor de 18 anos, portanto não é permitido sua embarbarção!")
    }
}

let n1 = 6
let n2 = 8
let media = (n1 + n2) / 2;
console.log('media: ${media}');

if (n1 === 0 || n2 === 0) {
    console.log("Você foi reprovado!")
} else if (media < 7) {
    console.log("Você foi reprovado, mas há chances de recuperação")
} else {
    console.log("Parabéns, você foi aprovado!")
}