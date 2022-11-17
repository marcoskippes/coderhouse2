class GestionarCompra{

//VALIDAR EL INGRESO DEL CLIENTE
    validarDatos(infoCliente){
        console.log(clientes)
        console.log(infoCliente)
        console.log(infoCliente.nombre)
        console.log(infoCliente.password)
        let a = infoCliente.nombre
        let b = infoCliente.password
        const existe = clientes.some(clientes => clientes.nombre === a)
        console.log(existe)
        if(existe){
                Swal.fire({
                    title: 'Está seguro de realizar la compra?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Su compra fue realizada con éxito',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        cerrarCompra()



                    }
                  })
                
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "no existe el usuario o la clave es incorrecta",
            
              })

            
            }

}
}

