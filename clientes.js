class Cliente {
    constructor(nombre,apellido,password,email){;

    this.nombre = nombre;
    this.apellido = apellido;
    this.password = password;
    this.email = email;
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

