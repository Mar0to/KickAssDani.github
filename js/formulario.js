/*Validar formulario Registro */

const formulario = document.getElementById('formulario')

const inputs = document.querySelectorAll('#formulario section input')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cedula: /^\d{9,11}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 4 a 12 digitos.
    password2: /^.{6,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/, // 7 a 14 numeros.
    fechaNacimiento: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
}

const campos = {
    usuario: false,
    nombre: false,
    cedula: false,
    apellidos: false,
    password: false,
    telefono: false,
    fechaNacimiento: false
}

const validarFormulario = (e) => {
  switch(e.target.name){
      case 'nombre':
        validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
      case 'apellidos':
        validarCampo(expresiones.apellidos, e.target, 'apellidos');
      break;
      case 'telefono':
        validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
      case 'cedula':
        validarCampo(expresiones.cedula, e.target, 'cedula');
      break;
      case 'fechaNacimiento':
          validarCampo(expresiones.fechaNacimiento, e.target, 'fechaNacimiento');
      break;
      case 'usuario':
        validarCampo(expresiones.usuario, e.target, 'usuario');
      break;
      case 'password':
        validarCampo(expresiones.password, e.target, 'password');
        validarClaves();
      break;
      case 'password2': 
        validarClaves();
      break;
  }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }  
}

const validarClaves = () =>{
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
       
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }else{
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


document.querySelector('#btnIngresar').addEventListener('click',ValidacionEspaciosEnBlanco);

function ValidacionEspaciosEnBlanco(){
    var usuario = document.getElementById("usuario").value;
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var apellidos = document.getElementById("apellidos").value;
    var password = document.getElementById("password").value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var password2 = document.getElementById("password2").value;
  
    if(usuario == "" || nombre == "" || cedula == "" || apellidos == "" ||
    password == "" || telefono == "" || fechaNacimiento == "" || password2 == ""){
      Swal.fire({
        title: 'Alto',
        text: 'Verifique que todos los espacios estén rellenados debidamente',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 6000,
        timerProgressBar: true,
        footer: '<p id="parrafos">De no rellenarse los espacios, no podrá realizar el registro en nuestra bases de datos. Por favor revise bien.</p>'
      })
    }
    else{


      Swal.fire({
        title: 'Éxito',
        text: 'El usuario: '+ usuario + ' ha sido registrado en nuestra bases de datos.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 6000,
        timerProgressBar: true
      })
    }
}

/* Validaciones del otro lado*/

const formularioSolictarCita = document.getElementById('formularioSolicitarCita')

const input = document.querySelectorAll('#formularioSolicitarCita section input')

const expresion = {
	usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    cedula: /^\d{9,11}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 4 a 12 digitos.
    password2: /^.{6,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8}$/, // 7 a 14 numeros.
    fechaNacimiento: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
}

const espacios = {
   nombre: false,
   apellidos: false,
   telefono: false,
   cedula: false,
   fechaCita: false,
   usuario: false,
   tipoCita: false,
   horaCita: false
}

const validarForm = (e) => {
  switch(e.target.name){
      case 'nombre':
        ValidarEspacios(expresion.nombre, e.target, 'nombre');
      break;
      case 'apellidos':
        ValidarEspacios(expresion.apellidos, e.target, 'apellidos');
      break;
      case 'telefono':
        ValidarEspacios(expresion.telefono, e.target, 'telefono');
      break;
      case 'cedula':
        ValidarEspacios(expresion.cedula, e.target, 'cedula');
      break;
      case 'fechaCita':
          ValidarEspacios(expresion.fechaCita, e.target, 'fechaCita');
      break;
      case 'usuario':
        ValidarEspacios(expresion.usuario, e.target, 'usuario');
      break;
      case 'tipoCita':
        ValidarEspacios(expresion.tipoCita, e.target, 'tipoCita');
      break;
      case 'horaCita':
        ValidarEspacios(expresion.horaCita, e.target, 'horaCita');
      break;
  }
}

const ValidarEspacios = (expresions, input, campo) =>{
    if(expresions.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        espacios[campo] = true
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        espacios[campo] = false;
    }  
}

input.forEach((input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});


document.querySelector('#btnIngresar').addEventListener('click',Validacion);

async function Validacion(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var cedula = document.getElementById("cedula").value;
    var fechaCita = document.getElementById("fechaCita").value;
    var tipoCita = document.getElementById("tipoCita").value;
    var horaCita = document.getElementById("horaCita").value;
    var usuario = document.getElementById("usuario").value;
  
    if(usuario == "" || nombre == "" || cedula == "" || apellidos == "" ||
    fechaCita == "" || telefono == "" || tipoCita == "" || horaCita == ""){
      Swal.fire({
        title: 'Alto',
        text: 'Verifique que todos los espacios estén rellenados debidamente',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 6000,
        timerProgressBar: true
       
      })
    }
    else{
      Swal.fire({
        title: 'Éxito',
        text: 'El usuario: '+ usuario + ' ha sido registrado en nuestra bases de datos.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        timer: 6000,
        timerProgressBar: true
      })
      //guardarCita();
    }

}



/* Inicio de sesion*/

const inciarSesion = document.getElementById('FormularioInicioSesion')

const inputIn = document.querySelectorAll('#FormularioInicioSesion section input')

const expresionesRegulares = {
	usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{6,12}$/, // 4 a 12 digitos.
}   
const CamposEnBlanco = {
    usuario: false,
    password: false
}

const validar = (e) => {
    switch(e.target.name){
        case 'usuario':
          validaciones(expresionesRegulares.usuario, e.target, 'usuario');
        break;
        case 'password':
          validaciones(expresionesRegulares.password, e.target, 'password');
        break;
    }
}
const validaciones = (expresiones, input, campo) =>{
    if(expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        CamposEnBlanco[campo] = true
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        CamposEnBlanco[campo] = false;
    }  
}

inputIn.forEach((input) =>{
    input.addEventListener('keyup', validar);
    input.addEventListener('blur', validar);
});

document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var bAcceso = false;

    if(usuario == "" || password == ""){
        Swal.fire({
            title: 'Lo sentimos.',
            text: 'Verifique si los espacios están rellenados debidamente',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            timer: 6000,
            timerProgressBar: true
          })
    }
    else{
        usuario = document.querySelector('#usuario').value;
        password = document.querySelector('#password').value;

        bAcceso = validarCredenciales(usuario,password);
    
        if(bAcceso == true){
         ingresar();
        }
        else{
            Swal.fire({
                title: 'Lo sentimos.',
                text: 'El usuario'+ usuario + ' no se encuentra registrado en nuestra bases de datos',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                timer: 6000,
                timerProgressBar: true
              })
        }
    }
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = '/es/admin.html';
           
        break;

        case '2':
            window.location.href = '/es/inicio.html';
        break;

        default:
            window.location.href = 'index.html';
        break;
    }
}

/*Eliminar SessionStorage*/

//document.querySelector('#btnIngresar').addEventListener('click', eliminar)
document.getElementById("btnCerrar").addEventListener("click", eliminar)
function eliminar(){
    sessionStorage.removeItem("usuarioActivo");
    sessionStorage.removeItem("rolUsuarioActivo");
}
  