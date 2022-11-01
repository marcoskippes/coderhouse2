
// VARIABLES GLOBALES PARA EL CARRITO
let carrito       = [];
let productos     = [];
let gestor;
let comprar;
const clave_carrito = 'carrito';
const clave_clientes = 'clientes';
let finalizar   = false

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

    let vac = confirm("Está seguro de vaciar el carrito?")
    
    if(vac){
    carrito.length=0  
    gestor.iniciar()
    localStorage.setItem('carrito', JSON.stringify( carrito ));    
    alert("Se eliminaron todos los productos")
    }
}

function cerrarCompra(){

    carrito.length=0 
    localStorage.setItem('carrito', JSON.stringify( carrito ));   
    gestor.iniciar()

}

function finalizarCompra(){

    nombre = prompt("Ingrese su usuario");
    password = prompt("Ingrese su contraseña");

    let cliente = new Cliente ( nombre,
                                null,
                                null,
                                password)
    ;
    console.log(cliente)
    comprar.validarDatos(cliente)
    
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
          conf = true
        }
        
       
      })

      return Swal.fire
      
    
      
    }



