//1
/* let name = prompt("Ingrese su nombre");

function saludar(a) {
   return alert(`Bienvenido ${a}`);
}

saludar(name);
console.log(name.toUpperCase());
console.log(name.toLowerCase()); */

//2
/* let number1 = parseInt(prompt("Ingrese un número"));
let number2 = parseInt(prompt("Ingrese otro número"));

function suma(x,y) {
    return alert(x + y);
}

function resta(x,y) {
    if (x > y) {
        alert(x - y);
    } else {
        alert(y - x);
    }
}

suma(number1,number2);
resta(number1,number2); */

//3
/*  let text = prompt("Ingrese un texto");
let resp = window.confirm("Acepte si desea ver el texto por patalla,si cancela lo verá por consola");
function mayuscula(a,b) {
    if (b == true) {
        alert(a.toUpperCase());
    } else {
        console.log(a.toUpperCase());
}
}

mayuscula(text,resp);  */

//4
/* let number1 = parseInt(prompt("Ingrese un número"));
let number2 = parseInt(prompt("Ingrese otro número"));
let operacion = prompt("Ingrese una operación matemática");

switch (operacion) {
    case "+":
         alert(number1 + number2);
        break;
        case "-":
            alert(number1 - number2);
           break;
        case "*":
            alert(number1 * number2);
           break;
           case "/":
            alert(number1 / number2);
           break;
        case "potencia":
            alert(Math.pow(number1,number2));
           break; 

    default:
        alert("Ingrese una opción correcta entre +,-,*,/ y potencia");
        break;
} */


//5
/* let respuesta = false;
do{
    let number1 = parseInt(prompt("Ingrese un número"));
    let number2 = parseInt(prompt("Ingrese otro número"));
    let operacion = prompt("Ingrese una operación matemática");
    
    switch (operacion) {
        case "+":
             alert(number1 + number2);
             respuesta = window.confirm("¿Desea realizar otra operación matemática?")
             
            break;
            case "-":
                alert(number1 - number2);
                respuesta = window.confirm("¿Desea realizar otra operación matemática?")
               break;
            case "*":
                alert(number1 * number2);
                respuesta = window.confirm("¿Desea realizar otra operación matemática?")
               break;
               case "/":
                alert(number1 / number2);
                respuesta = window.confirm("¿Desea realizar otra operación matemática?")
               break;
            case "potencia":
                alert(Math.pow(number1,number2));
                respuesta = window.confirm("¿Desea realizar otra operación matemática?")
               break; 
    
        default:
            alert("Ingrese una opción correcta entre +,-,*,/ y potencia");
            break;
    } 
}
while(respuesta == true) */

//6
/* const alumnos = [];
let resp = true;
do{
    let alumno = prompt("Ingrese el alumno");
    alumnos.push(alumno);
    resp = window.confirm("¿Desea agregar otro alumno?")

}while(resp == true)

alert(alumnos); */

//7
/* const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];
const mayusc = [];
for (let i = 0; i < ej7Nombres.length; i++) {
    
    let mayus = i +" " + ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1);
       
      mayusc.push(mayus);
   }

console.log(mayusc); */

//8
/* const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];
const newArray = ["Entregar alimento balanceado","Nombre largo","Nombre largo","Hay que vacunar contra la rabia","Nombre corto","Hay que vacunar contra la rabia","Nombre corto","Nombre largo","Nombre corto"];
let perro = prompt("Ingrese la posición que corresponde de su perro");
console.log(newArray[perro]); */

//9
/* const ej9restaurant = [25,17,18,44,12,9,36,50];
let menuMenor = 450;
let menuMayor = 700;
let cuenta = 0;
let mayores = parseInt(prompt("Ingrese la cantidad de mayores que son"));
let menores = parseInt(prompt("Ingrese la cantidad de menores que son"));
let cantidad = mayores + menores;
function restaurante(a,b,c) {
    if (a >= 4) {
        cuenta = (menuMenor * b) + (menuMayor * c);
        return cuenta = cuenta * 0.9;
    } else {
        return cuenta = (menuMenor * b) + (menuMayor * c);
    }
}

console.log(restaurante(cantidad,menores,mayores)); */

//10
const turnos = [];
let codigoPaciente = prompt("Ingrese el código del paciente");
let puntuarServicio = 0;
const calidadServicio = [];
let respuesta = true;
const pacientesVip = [];
function pacienteVip(a) {
    if(a > 0 && a <=99 ){
        alert("Es un paciente VIP");
        puntuarServicio = parent(prompt("¿En cuanto valora la calidad del servicio del 1 al 10?"));
        calidadServicio.push(puntuarServicio);
        turnos.unshift(a);
    }else if(a >= 100 && a <= 500){
        alert("Es un paciente de prepaga");
        turnos.push(a);
    }else if(a >= 501 && a <=999){
        alert("Es un paciente nuevo");
        respuesta = window.confirm("¿Desea pasarse a VIP?");
        if(respuesta == true){
            turnos.unshift(a);
            pacientesVip.push(a);
        }else{
            turnos.push(a);
        }
    }
    else{
        alert("Ingrese un código de paciente Number XXX, 3 dígitos de 1 a 999");
    }
}

pacienteVip(codigoPaciente);
let calidadServicio = parent(prompt("¿En cuanto valora la calidad del servicio del 1 al 10?"));
let suma = 0;
for (let i = 0; i < calidadServicio.length; i++) {
        suma+= calidadServicio[i];

    }
let promedio = suma/calidadServicio.length;
console.log(promedio);
console.log(Math.max(... calidadServicio));
console.log(Math.min(... calidadServicio));
alert(turnos);
alert(pacientesVip);

  


