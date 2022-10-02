/*BUSQUEDA BASE DE DATOS --> ARRAY

fetch("../productos.json")
.then(response => {
   return response.json();
})
.then(productos => console.log(productos));
*/

/*VALIDACION PRODUCTOS INGRESADOS

let seleccion_producto = prompt("Ingrese Producto");

if (validar_producto(seleccion_producto)){
    alert("El producto existe");
}else{
    alert("No ingresó un producto")

}

function validar_producto(seleccion_producto){

    if (seleccion_producto.trim() == ""){
        alert("Deber ingresar un producto")
        return false;

    }
    let precio = parseInt(seleccion_producto);

    if (isNaN(seleccion_producto)){
        alert("Debes Ingresar un ID de producto")
        return false;
    }
    return true 

}

*/


//Esto estará en una base de datos en el futuro
const db_user = "generico";
const db_pass = "pass1234";

// INICIO
document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});
//validar datos del usuario
function solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña");

    if (validarDatos(usuario,pass)){
        
        alert ("Carrito Iniciado")
        iniciarCarrito();

    }else{

        alert ("La contraseña y/o usuario son incorrectos")
    }

    }
//validacion del ingeso del cliente
function validarDatos(usuario,pass){

    if(usuario === db_user && pass === db_pass){

    return true;

    }else{
        return false;
    }
    }

function iniciarCarrito(){

    let list = "";
    let finalizar_carrito = false;
    let monto = 0;

    while (!finalizar_carrito){
        let cod = prompt("Ingrese codigo del producto");
        
        let compra = obtenerProducto(cod);
        const producto = compra[0],
                precio = compra[1];
    
        if (producto){
            console.log("Producto agregado con éxito:" +producto)
            list += "\n"+cod+" "+producto+"        precio:$"+precio;
            monto = monto + precio
            console.log("Monto acumulado es igual "+monto)
        }else{
            if (cod === null){
                finalizar_carrito = true;
            }else{
            alert("Ingrese un codigo de producto valido")
            }
        }

    }
    if (list != ""){
        let resp = confirm ("Desea concretar la compra de:"+"\n"+list+"\n"+"\n"+"Monto Total: $"+monto);

        if (resp){
            alert ("Gracias por la compra");
            
        }else{
            
        let mod = confirm ("Desea seleccionar nuevamente los productos?")
            if (mod){
                iniciarCarrito()
            }
    
        }
    }
}



function obtenerProducto(cod){

    let producto ;
    let precio;

    switch(cod){

    case "1":
            precio = 15000;
            producto = "Eléctrico 20";
            break;
    case "2":
            precio = 18000;
            producto = "Eléctrico 53";
            break;
    case "3":
            precio = 14000;
            producto = "Leñero";
            break;
    case "4": 
            precio = 15000;
            producto = "Gas AP150";
            break;
    case "5":
            precio = 15000;
            producto = "Calefón";
            break;
    case "6":
            precio = 8000;
            producto = "Populi Gas 45";
            break;
    case "7": 
            precio = 10000;
            producto = "Populi Gas 70";
            break;
    case "8":
            precio = 18000;
            producto = "Populi Gas 100";
            break;
    default:
            precio = false;
            producto = false;
    }
    return [producto,precio];
}







