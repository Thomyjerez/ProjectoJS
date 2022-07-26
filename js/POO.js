// objetos con notacion literal

let motorola = {
// propiedades -> clave: valor
modelo: "G31", 
SO:"Android",
resistenteAgua: false,
pantalla: 9,
color: ["celeste","negro","plateado"],
// conectividad:{
//     bluetooth:true,
//     red:"4G",
// }
    // metodos son similares a funciones
    navegar: function (){document.write("<p>Se abrio el navegador...</p>")},
    apagar: function(){document.write("<p>El dispositivo se apago</p>")}

}
// mostrar un objeto

console.log(motorola);
// document.write(motorola) esta forma no usamos
// formas de mostrar propiedades
document.write(`<p>Modelo del celular: ${motorola.modelo}</p>`)
document.write(`<p>SO: ${motorola["SO"]}</p>`)
document.write(`<p>Pantalla original: ${motorola.pantalla}</p>`)
// modificar una propiedad de un objeto
motorola.pantalla = 10;


// borrar una propiedad dee un objeto
delete motorola.resistenteAgua;
console.log(motorola);

// agregar una nueva propiedad a un objeto existente
motorola.precio = 90000
document.write(`<p>Precio: ${motorola.precio}</p>`)

// como llamamos un metodo de un objeto
motorola.navegar();
// objetc.create para crear otro objeto con uno preexistente
let motorola2 = Object.create(motorola)
motorola2.año = 2010
document.write(motorola2.año)

// para elegir un elemento de un array
document.write(`<p> Celular:${motorola.modelo} Color:${motorola.color[1]}</p>`)



