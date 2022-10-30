class GestionarCompra{

//VALIDAR EL INGRESO DEL CLIENTE
    validarDatos(infoCliente){
        const existe = clientes.some(cliente => cliente.nombre === infoCliente.nombre && cliente.password === infoCliente.password)

        if(existe){
                
                let close = confirm("Confirma la compra?")

                if(close){
                   alert("Compra Finalizada")
                    cerrarCompra() 
                }
                
        }
        else{
                alert("no existe el usuario o la clave es incorrecta")
        
            }

}
}