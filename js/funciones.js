// Funcion sin parametros
function saludar() {
 
    // todo el codigo que quiero que tenga esta funcion
  document.write("<p>Hola mundo</p>");
}
// funcion con parametro, hay que poner un nombre para recordar que dato pusimos en el parametro
function saludoNuevo(nombre, apellido){
    document.write (`<p>Hola mi nombre es ${nombre}, mi apellido es ${apellido}</p>`)
}


//  funciones que retornan un valor

 function convertirDolaresAPesos (dolares){

   let precioFinal = dolares * 301;
   return precioFinal;
   // no va codigo despues del return
 }

// funcion flecha o arrow function

let convertirDolaresAPesos = (dolares) => {
  let precioFinal = dolares * 301;
  return precioFinal;
}


// invocar o llamar a una funcion, podemos llamarla varias veces en cualquier parte del programa
saludar();

let nombre = prompt("Ingrese un nombre");
let apellido = prompt("Ingrese un apellido");


saludoNuevo(nombre, apellido);

convertirDolaresAPesos(800)
document.write(`<p>AMD Ryzen 9 $${convertirDolaresAPesos(550)} sin impuestos. </p>`);





