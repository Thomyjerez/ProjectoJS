// usuario, nombre, mail, fechaNacimiento, password, estado
// las clases se crean al principio del programa
// this solo usamos dentro de la clase
class Usuario {
  // primer metodo que se ejecuta en una clase
  constructor(userName, nombre, mail, fechaNacimiento, password) {
    this.nombreUsuario = userName;
    this.nombre = nombre;
    this.mail = mail;
    this.fechaNacimiento = fechaNacimiento;
    this.password = password;
    this.estado = true; //parametro por defecto
  }
  // agregaria todos los metodos que considero necesario
  cambiarPassword() {}

  mostrarDatos() {
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Email: ${this.mail}</li>
    <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
    <li>Nombre de usuario: ${this.nombreUsuario}</li>
    </ul>`);
  }

  // propiedades conmutadas para hacer mas segura la clase, para acceder o modificar un dato
  set modificarPassword(nuevoPass) {
    this.password = nuevoPass;
  }
}

// crear un usuario, instanciar o herencia
let jose = new Usuario(
  "Jose",
  "Jose Luis GM",
  "joseluis@gmail.com",
  "07/1989",
  "A%438fdf"
);
let lucia = new Usuario(
  "LuciaS",
  "Lucia Soraire",
  "lucia@gmail.com",
  "07/1989",
  "A%438fdfa"
);

console.log(jose);
jose.mostrarDatos();
lucia.mostrarDatos();

jose.modificarPassword = "12314515";
console.log(jose);

// prototipos y herencia
class Persona {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }

  hablar() {
    console.log(`${this.nombre} esta hablando`);
  }
}

let juan = new Persona("Juan", 25);
let pablo = new Persona("Pablo", 30);

class Profesor extends Persona {
  constructor(nombre, edad, tipo) {
    super(nombre, edad);
    this.tipo = tipo;
  }
  tipoFormateado() {
    return `Tipo de contratacion ${this.tipo}`;
  }
}

let fabrizio = new Profesor("Fabrizio", 35, "FullTime");