alert (" Para tener acceso a la reserva necesitamos los siguientes datos ")
let nombre      = prompt("ingrese su nombre")
let apellido    = prompt(" ingrese su apellido")
let nacimiento        = parseInt(prompt("ingrese su año de nacimiento"));

while (isNaN(nacimiento)) {
    alert ("Ingrese un valor numerico")
    nacimiento = parseInt(prompt("ingrese su año de nacimiento"));
}

const hoy = 2023

let resltado = 0;
function resta (a, b) {
    resultado = a - b;
    return resultado
}
let resultadoEdad = resta (hoy,nacimiento)

let clave = ""
 if (resultadoEdad >= 18) {
    alert (`Ya tienes tu reserva ${nombre} ${apellido} tienes ${resultadoEdad} años`);
    clave = prompt ("ingrese una clave de seguridad y recuerde que se le pedira en puerta")
    alert (`La reserva esta a nombre de ${nombre} ${apellido} y su clave de seguridad es ${clave}`)
 } else alert (`No tienes la edad suficiente para realizar una reserva ${nombre} ${apellido} tienes ${resultadoEdad} años`);


function refrescarPagina() {
    location.reload();
}