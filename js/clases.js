// usuario, nombre, mail, fechaNacimiento, password, estado
// las clases se crean al principio del programa
// this solo usamos dentro de la clase

// mentores: antiguedad, cursosDictados o comisionesACargo =[]
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

  // propiedades conmutadas para hacer mas segura la clase, para acceder o modificar un dato, lo tengo que hacer para cada una de las propiedades de mi clase
  set modificarPassword(nuevoPass) {
    this.password = nuevoPass;
  }

  set modificarNombre (nuevoNombre){
    this.nombre = nuevoNombre;
  }
  
  get mostrarNombre(){
    return this.nombre
  }

}
// alumnos: calificaciones, matricula, curso fullstack, estadoCurso: aprobado, en curso.
class Alumnos extends Usuario {
   constructor(matricula, curso, userName, nombre, mail, fechaNacimiento, password){
   super(userName, nombre, mail, fechaNacimiento, password)
   this.matricula=matricula;
   this.curso=curso;
   this.estadoCursado="En curso";
   this.calificaciones= [];
   }

  //  metodos
  recibirCalificacion(nota){
    this.calificaciones.push(nota);
  }
  obtenerPromedio(){
    let cantidadNotas = this.calificaciones.length;
    let sumatoriaNotas = 0;
    for(let i=0; i < this.calificaciones.length; i++){
      sumatoriaNotas += this.calificaciones[i]
    }
    let promedio = sumatoriaNotas / cantidadNotas;
    document.write(`<p>El alumno ${this.nombre} tiene de promedio ${promedio}</p>`)
  }
  mostrarDatosAlumno(){
    document.write(`<ul>
    <li>Matricula: ${this.matricula}</li>
    <li>Curso: ${this.curso}</li>
    <li>Estado de cursado: ${this.estadoCursado}</li>
    </ul>`);
  }
// para sobreescribir un metodo y sea diferente al anterior
  mostrarDatos(){
    document.write("<h3>Datos personales</h3>")
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Email: ${this.mail}</li>
    <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
    <li>Nombre de usuario: ${this.nombreUsuario}</li>
    </ul>`);
    document.write("<h3>Datos academicos</h3>")
    document.write(`<ul>
    <li>Matricula: ${this.matricula}</li>
    <li>Curso: ${this.curso}</li>
    <li>Estado de cursado: ${this.estadoCursado}</li>
    </ul>`);
  }
  
}

// get y set


// set sirve para modificar un solo valor y tenemos que ponerle un nombre distinto al de la propiedad
// get devuelve un valor, nunca tiene parametros
// crear un usuario, instanciar o herencia

let jose = new Usuario(
  // podemos poner tambien una variable dentro
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

// usamos get y set
document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);
jose.modificarNombre = "Jose Luis Gomez Marigliano"
document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);

// crear un objeto alumno
let nicolas =  new Alumnos("123", "FullStack", "Nicogm", "Nicolas GM", "nicolas@gmail.com", "07/12/1998", "123456");


let notaBootstrap = parseInt(prompt("Ingrese la nota correspondiente"));
let notaGit = parseInt(prompt("Ingrese la nota correspondiente"));

nicolas.recibirCalificacion(notaBootstrap);
nicolas.recibirCalificacion(notaGit);
nicolas.obtenerPromedio();
nicolas.mostrarDatosAlumno();

nicolas.mostrarDatos();








// prototipos y herencia
// class Persona {
//   constructor(nombre, edad) {
//     (this.nombre = nombre), (this.edad = edad);
//   }

//   hablar() {
//     console.log(`${this.nombre} esta hablando`);
//   }
// }

// let juan = new Persona("Juan", 25);
// let pablo = new Persona("Pablo", 30);

// class Profesor extends Persona {
//   constructor(nombre, edad, tipo) {
//     super(nombre, edad);
//     this.tipo = tipo;
//   }
//   tipoFormateado() {
//     return `Tipo de contratacion ${this.tipo}`;
//   }
// }

// let fabrizio = new Profesor("Fabrizio", 35, "FullTime");
