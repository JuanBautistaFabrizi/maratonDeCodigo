# maratonDeCodigo
1-Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.     

2-Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.     

3-Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.    

4-Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.    

5-Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.      


6-Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.              

 Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.          

const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia",”homero”];          

 Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:      
- Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"         
- Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"          
- Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"        
- Si es igual a "Tuerca", informar: "Entregar alimento balanceado"          
const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];         

 Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos.         
- Cada menor de edad pagará el menú $450 y cada adulto, $700.       
- Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura.      
Mostrar por pantalla la cantidad de comensales y el costo total a pagar.      
const ej9restaurant = [25,17,18,44,12,9,36,50]       

De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes.       
  Para ello:           
  - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).          
  - Si el código ingresado esta entre 1 y 99, es un paciente VIP.          
    - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.       
    - Agregar el código de paciente adelante en la cola (array) de turnos          
  - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.         
    - Agregar el código de paciente al final de la cola (array) de turnos        
  - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.          
    - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.        
    - Agregar el código de paciente al final de la cola (array) de turnos          
    
  - Si todos los pacientes fueron ingresados, informar en pantalla:      
    - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.     
    - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.          
    - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP      
  
  - Nota: Escribir código con funciones para facilitar su lectura.      
