// INICIO
document.addEventListener('DOMContentLoaded', function() {
    solicitarCliente();
});

let arreglo_clientes = new Array();

function solicitarCliente(){
    
    let input_nombre = prompt("Ingrese su nombre");
    console.log(input_nombre)
   
    let input_apellido = prompt("Ingrese su apellido");
    console.log(input_apellido)
  
    let input_email = prompt("Ingrese su email");
    console.log(input_email)
  
    let input_password = prompt("Ingrese una contraseña");
    console.log(input_password)


    if(input_nombre.trim =""){
        alert("no ingreso su nombre")
    }
    if(input_apellido.trim =""){
        alert("no ingreso su apellido")
    }
    if(input_email.trim =""){
        alert("no ingreso su email")
    }
    if(input_password.trim = "" || input_password.length < 6){
        alert("Su contraseña no es segura o no ingreso su contraseña")
    }
    
    crear_cliente(input_nombre,input_apellido,input_email,input_password)
}

function crear_cliente(input_nombre,input_apellido,input_email,input_password){

    let nombre = input_nombre
    let apellido = input_apellido
    let email = input_email
    let password = input_password

    let cliente = new Cliente (nombre,apellido,email,password);

    arreglo_clientes.push(cliente)

    console.log(arreglo_clientes)

    let new_user_confirm = confirm ("Desea Generar otro usuario")
            if (new_user_confirm){
                solicitarCliente()
            
            }

}