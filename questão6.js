var palavra = "matam"
var palavraInvertida = "";

for (var i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra.charAt(i);
}

if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
  console.log("A palavra é um palíndromo.");
} else {
  console.log("A palavra não é um palíndromo.");
}
