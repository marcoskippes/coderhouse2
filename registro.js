// INICIO

let btn_registrar = document.getElementById("btn_registrar");
btn_registrar.addEventListener("click",()=>{
    if (solicitarCliente()){
        crear_cliente();
    } 
    })

let arreglo_mensajes = document.getElementById("arreglo_mensajes")

    /* ejemplo de ejecutar automaticamente
document.addEventListener('DOMContentLoaded', function() {
    solicitarCliente();
});
*/

let arreglo_clientes = new Array();

function solicitarCliente(){
    
    alerta_registro.innerHTML = "" ;
    let arreglo_mensajes = new Array();

    let input_nombre = document.getElementById("name_input").value;
    let input_apellido = document.getElementById("surname_input").value;
    let input_email = document.getElementById("email_input").value;
    let input_password = document.getElementById("pass_input").value;

    if(!input_nombre){
        arreglo_mensajes.push("Ingrese nombre")
    }
    if(!input_apellido){
        arreglo_mensajes.push("Ingrese Apellido")
    }
    if(!input_email){
        arreglo_mensajes.push("Ingrese un email")
    }
    if(!input_password.trim || input_password.length < 6){
        arreglo_mensajes.push("Ingresar una contraseña con 6 o mas caracteres");
    }
    
    if (arreglo_mensajes.length > 0){
        let lista = document.createElement("ul");
        lista.textContent = "Se detectaron los siguientes errores: ";
        arreglo_mensajes.forEach(element => {
            lista.appendChild(crear_li(element));
        })
        alerta_registro.appendChild(lista);
    }

    return arreglo_mensajes.length == 0 ;

}

function crear_cliente(){

    let nombre = document.getElementById("name_input").value;
    let apellido = document.getElementById("surname_input").value;
    let email = document.getElementById("email_input").value;
    let password = document.getElementById("pass_input").value;

    let cliente = new Cliente (nombre,apellido,email,password);

    arreglo_clientes.push(cliente)

    console.log(arreglo_clientes)

    resetear_form()

    alert("Bienvenido "+ nombre + " "+ apellido)

}

/*Funcion para crear una lista con los mensajes y alertas*/

function crear_li (mensaje){
    let li = document.createElement("li");
    li.textContent = mensaje ;
    return li ;
}

/*Esta funcion me borra todo lo que puso el usuario*/

function resetear_form(){
    document.getElementById("name_input").value = "";
    document.getElementById("surname_input").value = "";
    document.getElementById("email_input").value = "";
    document.getElementById("pass_input").value = "";
}