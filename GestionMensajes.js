// INICIO

let btn_registrar = document.getElementById("btn_contacto");
btn_registrar.addEventListener("click",()=>{
    if (validarDatosContacto()){
        enviar_mensaje();
    } 
    })

// ALMACENAMIENTO INICIO

let productos     = [];
const clave_contacto = 'contacto';

// EVENTO QUE SE CARGA CUANDO SE HABRE LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
    contacto = JSON.parse(localStorage.getItem('contacto')) || [];
})

let arreglo_contacto = new Array();

function validarDatosContacto(){
    
    let arreglo_validacion = new Array();
    alerta_contacto.innerHTML = "" ;
    let input_nombre = document.getElementById("name_input").value;
    let input_email = document.getElementById("email_input").value;
    let input_telephone = document.getElementById("telephone_input").value;
    let input_subject = document.getElementById("subject_input").value;
    let input_message = document.getElementById("message_input").value;

    if(!input_nombre){
        arreglo_validacion.push("Ingrese nombre")
    }
    if(!input_email){
        arreglo_validacion.push("Ingrese Apellido")
    }
    if(!input_telephone){
        arreglo_validacion.push("Ingrese un Whatsapp de contacto")
    }
    if(!input_subject){
        arreglo_validacion.push("Ingresar un motivo");
    }
    if(!input_message){
        arreglo_validacion.push("Ingresar su consulta");
    }
    
    if (arreglo_validacion.length > 0){
        let lista = document.createElement("ul");
        lista.textContent = "Se detectaron los siguientes errores: ";
        arreglo_validacion.forEach(element => {
            lista.appendChild(crear_li(element));
        })
        alerta_contacto.appendChild(lista);
    }

    return arreglo_validacion.length == 0 ;

}

function enviar_mensaje(){

    let nombre = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let telephone = document.getElementById("telephone_input").value;
    let subject = document.getElementById("subject_input").value;
    let message = document.getElementById("message_input").value;

    let contacmsj = new ContactoMensajes (nombre,email,telephone,subject,message);
    arreglo_contacto.push(contacmsj)  
    contacto.push(arreglo_contacto)  
    localStorage.setItem('contacto', JSON.stringify( contacto ));        
    

    resetear_form()

    msjBienvenida(nombre)

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
    document.getElementById("email_input").value = "";

}

function msjBienvenida(nombre){
    Swal.fire({
        title: "Bienvenido "+ nombre,
        showConfirmButton: false,
        timer: 3000
      })
}