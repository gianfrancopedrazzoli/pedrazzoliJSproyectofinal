/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
const validar = confirm('desea crear una cuenta?');
let nombreUsuario;
let passwordUsuario;
let listasUsuarios = [];

function crearUsuario() {
  while (nombreUsuario === null || nombreUsuario.trim().length === 0) {
    alert('ese usuario no es valido');
    nombreUsuario = (prompt('ingresa un usuario') || '').toLowerCase();
  }
  alert('usuario registrado');
  return true;
}

function crearPassword() {
  while (passwordUsuario.trim().length <= 7) {
    alert('contraseña no valida. Recuerda ingresar al menos 8 carcteres, no se admiten espacios.');
    passwordUsuario = (prompt('ingresar contraseña:') || '');
  }
  alert('contraseña registrada');
  console.log(`hola ${nombreUsuario}! \ntu contraseña es: ${passwordUsuario}`);
  return true;
}

// function cancelarInicioSesion() {
// }

function validarIngresoSitio() {
  const CONFIRMACION_USER = confirm('¿quiere ingresar a al sitio?');
  if (CONFIRMACION_USER === false) {
    return false;
    // return document.write('no accediste');
    // cancelarInicioSesion();
    // return validarIngresoSitio();
  }
  return true;
}

function ingresarUsuario() {
  const nombreUsuarioCheck = (prompt('ingrese su usuario:') || '');
  if (nombreUsuarioCheck === nombreUsuario) {
    let passwordUser = (prompt('ingresa su contraseña:') || '');
    if (passwordUser === passwordUsuario) {
      document.write(`Bienvenido ${nombreUsuario}`);
    } else if (passwordUser !== passwordUsuario) {
      alert('la contraseña ingresada no es la correcta');
      while (passwordUser !== passwordUsuario) {
        passwordUser = (prompt('ingresa su contraseña:') || '');
        document.write(`Bienvenido ${nombreUsuario}`);
      }
    }
  } else {
    alert('usuario incorrecto');
    ingresarUsuario();
  }
}

function crearCuenta() {
  crearUsuario();
  crearPassword();
  validarIngresoSitio();
  ingresarUsuario();
}

if (validar === true) {
  nombreUsuario = (prompt('crea un usuario') || '').toLowerCase();
  passwordUsuario = (prompt('ingresa una contraseña de al menos 8 caracteres (sin espacios)') || '');
  crearCuenta();
} else {
  alert('no ingresaste al sitio');
}

console.log(listasUsuarios);