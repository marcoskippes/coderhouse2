class Cliente {
    constructor(nombre,apellido,email,password){;

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.monto_compra = null;
    }
    
getMontoCompra(){
    return this.monto_compra
}

/**
 * METODO PARA ASIGNAR MONTO DE COMPRA 
 * @param {*} carrito 
 */

setMontoCompra(carrito){
    this.monto_compra = carrito;
}

getDatos(){
    return this.email + " - " + this.monto_compra;
}

}

