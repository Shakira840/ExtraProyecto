//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
//noprotect

var cotizacion = prompt("Desea una cotización, ingrese Si o Salir ")

while(cotizacion.toUpperCase()!='SALIR'){
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedades_recargo = 0.35 // 35%
var salario_recargo = 0.05 // 5%


//Recargo
var recargo = 0
var recargo_total = 0

var recargo_casado = 0
var recargo_casado_total = 0

var recargo_hijos = 0
var recargo_hijos_total = 0

var recargo_propiedades = 0
var recargo_propiedades_total = 0

var recargo_salario = 0
var recargo_salario_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  //alert("Estoy aquí en casado " + casado.toUpperCase())
  edad_conyuge_numero = parseInt(edad_conyuge)
}


var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
cantidad_hijos = prompt("¿Cuántos hijos tiene?")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */

var cantidad_hijos_numero = parseInt(cantidad_hijos)

var propiedades = prompt("¿Tiene propiedades?")
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = prompt ("Ingrese cantidad de propiedades")
}
  var cantidad_propiedades_numero = parseInt(cantidad_propiedades)

var salario = prompt("¿Tiene un salario?")
var cantidad_salario
if("SI" == salario.toUpperCase()){
  cantidad_salario = prompt ("Ingrese su salario")
}
  var cantidad_salario_numero = parseInt(cantidad_salario)

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}
else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */
if (casado.toUpperCase() == "SI"){
    if (edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo_casado = precio_base * casado_18
  recargo_casado_total = recargo_casado_total + recargo_casado
  }
  else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo_casado = precio_base * casado_25
  recargo_casado_total = recargo_casado_total + recargo_casado
  }
  else if (edad_conyuge_numero>=50){
  recargo_casado = precio_base * casado_50
  recargo_casado_total = recargo_casado_total + recargo_casado
} 
  }

/**
 * 3. Recargo por la cantidad de hijos 
 */ 

if (hijos.toUpperCase() == "SI"){
  recargo_hijos = precio_base * cantidad_hijos_numero * hijos_recargo
  recargo_hijos_total = recargo_hijos_total + recargo_hijos
}
  
  /**
 * 4. Recargo por la cantidad de propiedades
 */ 

if (propiedades.toUpperCase() == "SI"){
  recargo_propiedades = precio_base * cantidad_propiedades_numero * propiedades_recargo
  recargo_propiedades_total = recargo_propiedades_total + recargo_propiedades
  }
  
    /**
 * 5. Recargo por salario
 */ 

  if (salario.toUpperCase() == "SI"){
  recargo_salario = cantidad_salario_numero * salario_recargo
  recargo_salario_total = recargo_salario_total + recargo_salario
}
  

precio_final = precio_base + recargo_total + recargo_casado_total + recargo_hijos_total + recargo_propiedades_total + recargo_salario_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total para el asegurado sera de: "+recargo_total)
alert("El recargo total para el cónyuge sera de: " + recargo_casado_total)
alert("El recargo total para los hijos sera de: " + recargo_hijos_total)
alert("El recargo total por las propiedades sera de: " + recargo_propiedades_total)
 alert("El recargo total por el salario sera de: " + recargo_salario_total)


alert ("El precio final sera de: "+precio_final)

cotizacion = prompt("Desea una cotización, ingrese Si o Salir ")
}
