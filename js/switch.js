let estacion = parseInt(
prompt(
    "Ingrese su estacion del año preferida: 1-verano, 2-otoño, 3-primavera, 4-invierno"
  )
);

/*if (estacion == 1) {
  document.write("Helado");
} else if (estacion == 2) {
  document.write("Locro");
} else if (estacion == 3) {
  document.write("Chocolate");
} else if (estacion == 4) {
  document.write("Cerveza");
} else {
  document.write("Ingresaste una opcion erronea");
}*/

/* switch(opcion){
    case 1:
        todas las lineas de codigo en caso que el usuario selecciono 1
        ...
        ...
        ...
        break;
    case 2:
        todas las lineas de codigo en caso que el usuario selecciono 2
        ...
        ...
        ...
        break;
    case 3:
        todas las lineas de codigo en caso que el usuario selecciono 3
        ...
        ...
        ...
        break;
        default:
            todas las lineas que quiero ejecutar en caso que el usuario selecciono una opcion diferente a lo que declare arriba
        ...                    
}

*/

switch (estacion) {
  case 1:
  case "1":
  case "verano":
    document.write("Helado");
    break;

  case 2:
    document.write("Locro");
    break;

  case 3:
    document.write("Chocolate");
    break;

  case 4:
    document.write("Cerveza");
    break;

  default:
    document.write("Ingresaste una opcion erronea");
}
