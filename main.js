// VARIABLES GLOBALES PARA EL CARRITO
let carrito       = [];
let productos     = [];
let gestor;

// EVENTO QUE SE CARGA CUANDO SE HABRE LA PAGINA
document.addEventListener('DOMContentLoaded', () => {

    // CARGAR EL CARRITO CON EL LOCAL STORAGE, SI NO HAY NADA SE ASIGNA 0
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    gestor = new GestionarProductos();
    gestor.iniciar();
})

// FUNCION PARA AGREGAR ARTICULOS AL CARRITO *******""""VERIFICAR EL H3, PRECIO Y IMG
function addCarrito(id) {
    //*revisar el row id donde busca
    const prod = document.querySelector('#row_'+id);
    let producto = new Producto (   id,
                                    prod.querySelector('h1').textContent, //descripcion//
                                    prod.querySelector('h2').textContent, //precio//
                                );
    gestor.addCart( producto );
}



