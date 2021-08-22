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

const ValidarEspacios = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        espacios[campo] = true
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        espacios[campo] = false;
    }  
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});


document.querySelector('#btnIngresar').addEventListener('click',Validacion);

function Validacion(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var cedula = document.getElementById("cedula").value;
    var fechaCita = document.getElementById("fechaCita").value;
    var tipoCita = document.getElementById("tipoCita").value;
    var horaCita = document.getElementById("horaCita").value;
  
    if(usuario == "" || nombre == "" || cedula == "" || apellidos == "" ||
    fechaCita == "" || telefono == "" || tipoCita == "" || horaCita == ""){
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
