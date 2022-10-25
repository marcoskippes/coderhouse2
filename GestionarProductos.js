class GestionarProductos{
    iniciar(){
        //ARREGLO PRODUCTOS
        productos = [
            {
            "precio":15000,
            "id": 1,
            "title": "Eléctrico 20",
            "tipo": "Electrico",
            "marca": "Ecotermo",
            "img": "CALEFON.png",
            },
            {
            "precio":18000,
            "id": 2,
            "title": "Eléctrico 53",
            "tipo": "Electrico",
            "marca": "Ecotermo",
            "img": "CALEFON.png",
            },
            {
            "precio":14000,
            "id": 3,
            "title": "Leñero",
            "tipo": "Leña",
            "marca": "Ecotermo"
            ,
            "img": "CALEFON.png",
            },
            {
            "precio":15000,
            "id": 4,
            "title": "Gas AP150",
            "tipo": "Gas",
            "marca": "Ecotermo",
            "img": "CALEFON.png",
            },
            {
            "precio":15000,
            "id": 5,
            "title": "Calefón",
            "tipo": "Gas",
            "marca": "Ecotermo",
            "img": "CALEFON.png",
            },
            {
            "precio":8000,
            "id": 6,
            "title": "Populi Gas 45",
            "tipo": "Gas",
            "marca": "Populi",
            "img": "CALEFON.png",
            },
            {
            "precio":10000,
            "id": 7,
            "title": "Populo Gas 70",
            "tipo": "Gas",
            "marca": "Populi",
            "img": "CALEFON.png",
            },
            {
            "precio":18000,
            "id": 8,
            "title": "Populi Gas 100",
            "tipo": "Gas",
            "marca": "Populi",
            "img": "CALEFON.png",
            }
        ]

        this.cargarProductos();
        this.mostrarCarrito();
        this.actualizarContador();
    }


    // LO PRIMERO QUE HACEMOS ES CARGAR PRODUCTOS EN LA PAGINA **NO TIENE FILTROS
    cargarProductos() { 
        
        const divProductos    = document.querySelector('#productos');
        divProductos.innerHTML = '';
        console.log(productos);
        if(productos.length === 0 ) {
            this.mostrarHeader('No se han encontrado productos para su búsqueda');
            //NO ES UTILIZADO EL MENSAJE//
            return false;

        } 
        else {          
            productos.forEach( (producto) => {
                let prod = document.createElement('div');
                prod.classList.add('col-12', 'h200', 'mt-3', 'd-flex','justify-content-center', 'p-2', 'flex-row', 'producto');
                prod.setAttribute('id', 'row_'+producto.id);    
            
                prod.innerHTML = `     
                                        <div class="prd1">
                                        <img src="../img/${producto.img}" />
                                        <h1>${producto.title}</h1>
                                        <h2>${producto.precio}</h2>
                                        <div class="boton">
                                        <a href="javascript:addCarrito(${producto.id})" >AGREGAR</a>
                                        </div>
                                        </div>`;

                divProductos.appendChild( prod );

            } )    
        }
    }

//AGREGAR AL CARRO FUNCION

addCart( infoProducto ) {   
    const existe = carrito.some( producto => producto.id === infoProducto.id );
    // AUMENTO CONTADOR SI EXISTE
    if(existe) 
    {
        const articulos = carrito.map( producto => {
            if(producto.id === infoProducto.id)
            {
                producto.cantidad++;
                return producto;
            }
            else
            {
                return producto;
            }             
        })
            carrito = articulos; 
            alert("Se actulizo la cantidad del producto");
    }
    else 
    {
        // COMO NO EXISTE LO AGREGO
        carrito.push(infoProducto);
        alert("Se agrego el producto");
        console.log(carrito)
    }
    this.actualizarCarrito();
    }

    //CONTAR CANTIDAD DE PRODUCTOS

    contarProductos() { 
        let contadorProductos = 0;
        carrito.forEach(( producto ) => {
            contadorProductos = contadorProductos + parseInt(producto.cantidad);
        })
        return contadorProductos;
    }

     //ACTUALIZAR CARRITO
     actualizarCarrito() {
        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();
    }

    // ACTUALIZAR EL CONTADOR
    actualizarContador() { 
        let totalArticulos = this.contarProductos();
        let countCarrito = document.querySelector('#badgeCarrito');
        // Actualizar contador del carrito
        countCarrito.innerHTML = totalArticulos;

    }

    // ACTUALIZAR DETALLE DEL CARRITO
    mostrarCarrito() { 
        let detalleCarrito = document.querySelector('#idCarrito');
        detalleCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach( ( producto ) => {
            const row = document.createElement('div');
            row.classList.add('row');
            total += parseInt(producto.precio*producto.cantidad);
            row.innerHTML = `
                        <div class="col-6 d-flex align-items-center p-2 border-bottom">
                            ${producto.title}
                        </div>

                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${producto.cantidad}
                        </div>

                        <div class="col-4 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${producto.precio}
                        </div>

                        <div class="col-1 d-flex p-2 border-bottom">
                            <a href="javascript:eliminar(${producto.id})">
                                <i class="btn btn-primary p-2">-</i>
                            </a>
                        </div>
            `;

            
            detalleCarrito.appendChild(row);

        })

        let row = document.createElement('div');
        row.classList.add('row');
        
        row.innerHTML = `   <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                                Total a pagar:
                            </div>
                            <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                                <b> $ ${total}</b>
                            </div>`;

        // Agrega el HTML del carrito en el tbody
        detalleCarrito.appendChild(row);
    }



//Muestra un detalle de lo mostrado en pantalla
mostrarHeader(msg){ 
    const headerProductos = document.querySelector('#headerProductos');
    headerProductos.innerHTML = msg;
}

 // GUARDAR INFORMACION EN LOCAL STORAGE
 guardarCarrito() { 
    
    localStorage.setItem('carrito', JSON.stringify( carrito ));        
}




}