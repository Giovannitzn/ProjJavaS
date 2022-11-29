
let nombre = prompt("Para poder iniciar, Ingrese su nombre");
let apellido = prompt("Ahora su apellido:");
let edad = parseInt (prompt ("Por ultimo que edad tienes:"));
let mensaje = `Hola ${nombre} ${apellido} bienvenido, gracias por visitar nuestro sitio`;

if (edad>=18) {
    let mensaje1 = `Eres mayor de edad, puedes continuar ... `;
    alert(mensaje1);
    let pelicula = prompt("¿que tipo de pelicula te gusta accion, romantica, aventura o terror?")
    while (pelicula != null){
          switch (pelicula) {
            case "terror":
            alert("Te gusta el suspenso y terror; las peliculas de Hallowen te va re bien");
            break;
            case "romantica":
                alert("Eres muy sentimental y romantica/o ");
            break;
            case "accion":
                alert("Eres de las peliculas con mucha acción y espionaje, Las pelis de agentes son rebuenas");
                break;
                case "aventura":
                    alert("Las peliculas de aventura son las mejores");
                    break;
            default:
                alert("Quiza no te interesa el cine");
                 break;
            }break;
        }
        let finde = prompt("Los fines de semana te gusta pasear por el campo");
            if (finde ==="si") {
                alert("Eres amante de la naturaleza");
            } else {
                alert("Tienes otras actividades de interes, que no tiene que ver con la naturaleza");
            }
} else {
    alert ("No se ingreso bien tu edad o eres menor de edad, aun trabajamos para atenderte");
}

alert("Muchas gracias por participar, pronto represamos con mas ...");