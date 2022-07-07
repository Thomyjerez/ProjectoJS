let frase = prompt("Ingrese una frase de hasta 10 caracteres");
console.log(frase);
console.log(frase.length);

console.log(frase.charAt(0));
console.log(frase.charAt(frase.length - 1));
console.log(frase.toLowerCase());
//HOLA MUNDO, esto no funciona con mas de 10 caracteres
//actualizar la variable frase
frase = frase.toLowerCase();

for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase - charAt(vocal));
  if (
    frase.charAt(vocal) === "a" ||
    frase.charAt(vocal) === "e" ||
    frase.charAt(vocal) === "i" ||
    frase.charAt(vocal) === "o" ||
    frase.charAt(vocal) === "u"
  ) {
    document.write(frase.charAt(0));
  }
}
