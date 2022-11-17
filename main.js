

// VARIABLES GLOBALES PARA EL CARRITO
let carrito       = [];
let productos     = [];
let gestor;
let comprar;
const clave_carrito = 'carrito';
const clave_clientes = 'clientes';
let finalizar   = false;

const color_boton = "#000080"

// EVENTO CLICK FINALIZAR - LLAMA A FIANLIZAR COMPRA //

let btn_finalizar = document.getElementById("finalizar");
btn_finalizar.addEventListener("click",()=>{ finalizarCompra()
    })

// EVENTO QUE SE CARGA CUANDO SE HABRE LA PAGINA
document.addEventListener('DOMContentLoaded', () => {

    // CARGAR EL CARRITO CON EL LOCAL STORAGE, SI NO HAY NADA SE ASIGNA 0
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    gestor = new GestionarProductos();
    gestor.iniciar();

    // CARGAR LOS CLIENTES EN EL LOCAL STORAGE, SI NO HAY NADA SE ASIGNA O
    clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    comprar = new GestionarCompra();
    
})

// FUNCION PARA AGREGAR ARTICULOS AL CARRITO
function addCarrito(id) {
    //*revisar el row id donde busca
    const prod = document.querySelector('#row_'+id);
    let producto = new Producto (   id,
                                    prod.querySelector('h1').textContent, //descripcion//
                                    prod.querySelector('h2').textContent, //precio//
                                );
    gestor.addCart( producto );


    fetch('../productos.json')
    .then(respuesta => respuesta.json())
    .then(resultado => {
          productos = resultado.productos;
        

    })







}


// FUNCION PARA REDUCIR ARTICULOS AL CARRITO
function reducirCarrito(id) {
    //*revisar el row id donde busca
    const prod = document.querySelector('#row_'+id);
    let producto = new Producto (   id,
                                    prod.querySelector('h1').textContent, //descripcion//
                                    prod.querySelector('h2').textContent, //precio//
                                );
    gestor.redCart( producto );
}

// FUNCION PARA VACIAR EL CARRITO

function vaciarCarrito(){
  Swal.fire({
    title: "Está seguro de vaciar el carrito?",
    confirmButtonColor: color_boton,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'SI',
    denyButtonText: `NO`,
  }).then((result) => {
    if (result.isConfirmed) {
      carrito.length=0  
      gestor.iniciar()
      localStorage.setItem('carrito', JSON.stringify( carrito ));
      Swal.fire('Saved!', '', 'success');
      return true
    } else if (result.isDenied) {
      Swal.fire('Not saved', '', 'info')
      return false
    }
    
  })}

function cerrarCompra(){

    carrito.length=0 
    localStorage.setItem('carrito', JSON.stringify( carrito ));   
    gestor.iniciar()

}

function finalizarCompra(){
  
  const logName = () => {
    Swal.fire({
      title: 'Inicio Cuenta',
      html: 
      '<input id="login" class="swal2-input" placeholder="nombre">' +
      '<input id="password" class="swal2-input" placeholder="Password">',
      confirmButtonText: 'Iniciar',
      focusConfirm: true,
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!nombre || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        let cliente = new Cliente (nombre,
                                null,
                                null,
                                password);
        console.log(cliente)
        comprar.validarDatos(cliente)
        /* return { nombre: nombre, password: password }*/
      }
    })
    /*
    .then((result) => {
      Swal.fire(`
        nombre: ${result.value.nombre}
        Password: ${result.value.password}
      `.trim())
    })*/
}
    setTimeout(logName,0)

    
    
}




const confirmAlert = (mensaje)=>{ 

    Swal.fire({
        title: mensaje,
        text: "No se puede volver atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!',
        
      })
      
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Confirmado!',
            '',
            'success'
          );
          
        }
        
       
      })

      
      
    
      
    };


const confirmMarcos = (mensaje) =>{
    Swal.fire({
        title: mensaje,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success');
          return true
        } else if (result.isDenied) {
          Swal.fire('Not saved', '', 'info')
          return false
        }
        
      })
 
    }

// Eventos de tecla para buscador
document.querySelector('#buscar').addEventListener('keyup', () => {

  let q = document.querySelector('#buscar').value;

  //Empezamos a buscar solo cuadno hay se hayan tipeado mas 2 letras o mas
  if( q.length >= 2 ) { 
      gestor.buscar( q );        
  } else if ( q.length === 0 ) {
      //Muestro todo sino hay nada el buscador   
      gestor.iniciar();
  } 

})


// ELIMINAR FILTROS PARA PODER OPERAR EL CARRITO
document.querySelector('#iconoCarrito').addEventListener('click', () => {
  let q = 0;
  gestor.iniciar();
})


  
