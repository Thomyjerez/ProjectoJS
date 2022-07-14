// Funcion sin parametros
function saludar() {
 
    // todo el codigo que quiero que tenga esta funcion
  document.write("<p>Hola mundo</p>");
}
// funcion con parametro
function saludoNuevo(nombre, apellido){
    document.write (`<p>Hola mi nombre es ${nombre}, mi apellido es ${apellido}</p>`)
}



// invocar o llamar a una funcion, podemos llamarla varias veces en cualquier parte del programa
saludar();

let nombreIngresado = prompt("Ingrese un nombre");
let apellidoIngresado = prompt("Ingrese un apellido");


saludoNuevo(nombreIngresado, apellidoIngresado);








