let palavra = "Palíndromo";

let reverso = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  reverso += palavra.charAt(i);
}

if (palavra === reverso) {
  console.log("A palavra é um palíndromo.");
} else {
  console.log("A palavra não é um palíndromo.");
}
