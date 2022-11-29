
let nombre = prompt("Para poder iniciar, Ingrese su nombre");
let apellido = prompt("Ahora su apellido:");
let edad = parseInt (prompt ("Por ultimo cual es tu edad:"));
let mensaje = `Hola ${nombre} ${apellido} bienvenido, gracias por visitar nuestro sitio`;

if (edad<=18) {
    let mensaje1 = `Para tu edad ${edad} años, tenemos estas opciones`;
    alert(mensaje1);
} else {
    alert ("Trabajamos para brindarle mas opciones");
}
