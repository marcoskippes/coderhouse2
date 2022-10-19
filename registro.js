// INICIO

let btn_registrar = document.getElementById("btn_registrar");

btn_registrar.addEventListener("click",()=>{

    solicitarCliente()

    })

    /* ejemplo de ejecutar automaticamente
document.addEventListener('DOMContentLoaded', function() {
    solicitarCliente();
});
*/

let arreglo_clientes = new Array();

function solicitarCliente(){
    
    let input_nombre = document.getElementById("name_input").value;
    let input_apellido = document.getElementById("surname_input").value;
    let input_email = document.getElementById("email_input").value;
    let input_password = document.getElementById("pass_input").value;

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