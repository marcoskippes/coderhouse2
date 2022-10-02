/*EJEMPLO DE 

class Cliente {
    constructor(nro_cliente,nombre,apellido){
        this.nro_cliente = nro_cliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuenta_pesos = null;
        this.cuenta_dolares = null;

    }

    setCuentaPesos(nueva_cuenta){
        this.cuenta_pesos = nueva_cuenta;
    }
    setCuentaDolares(nueva_cuenta){
        this.cuenta_dolares = nueva_cuenta;
    }
    getCuentaPesos(){
        return this.cuenta_pesos;
    }
    getCuentaDolares(){
        return this.cuenta_dolares;
    }
    getDatos(){
        return this.nro_cliente+ "  " + this.nombre + " "+ this.apellido 
    }
}

class Cuenta {

    constructor(_cbu,tipo){
        this._cbu = this._cbu
        this.tipo = tipo;
        this.saldo = 0;
    }
    getSaldo(){
        return this.saldo
    }
    getTipo(){
        return this.tipo
    }
    debitar(monto){
        this.saldo = this.saldo - monto;
    };
    acreditar(monto){
        this.saldo = this.saldo + monto;
    };
    getDescrip(){
        return this._cbu + "-"+ this.tipo + this.saldo
    }

//validar si tenemos saldo
    tieneSaldo(monto){
        return this.saldo >= monto;
    }
}

//creo los clientes del banco

//cliente1
let cliente1  = new Cliente(1,"Jorge","Ramos");
cliente1.setCuentaPesos(new Cuenta(111,"$"));
cliente1.setCuentaDolares(new Cuenta(222,"USD"));

let cuenta_pesos = cliente1.getCuentaPesos();
cuenta_pesos.acreditar(5000);

//cliente2

let cliente2  = new Cliente(2,"Maria","Jimenz");
cliente2.setCuentaPesos(new Cuenta(112,"$"));
cliente2.setCuentaDolares(new Cuenta(223,"USD"));

//cuenta en pesos del cleitne 2
let cuenta_pesos_cliente2 = cliente2.getCuentaPesos()

let mensaje = "Antes de la transferencia";
mensaje += "\n"+cliente1.getDatos();
mensaje += "\n"+cliente1.getCuentaPesos().getDescrip()
mensaje += "\n"+cliente2.getDatos();
mensaje += "\n"+cliente2.getCuentaPesos()
mensaje += "\n"+cliente2.getDescrip();
console.log(mensaje);

//hago la transferencia//

transferir(1250,cuenta_pesos,cuenta_pesos_cliente2);

mensaje = "Despues de la transferencia";
mensaje += "\n"+cliente1.getDatos();
mensaje += "\n"+cliente1.getCuentaPesos().getDescrip();
mensaje += "\n"+cliente2.getDatos();
mensaje += "\n"+cliente2.getCuentaPesos()
mensaje += "\n"+cliente2.getDescrip();
console.log(mensaje);



function transferir (monto,cuenta_origen,cuenta_destino){

    if(cuenta_origen && cuenta_destino){
        if(cuenta_origen.getTipo()===cuenta_destino.getTipo()){
            if(cuenta_origen.tieneSaldo(monto)){

                cuenta_origen.debitar(monto);
                cuenta_destino.acreditar(monto);
                alert("transferencia exitosa")

            }else{
                alert("no se puede transferir, saldo insuficiente")
            }

        }else{
            alert("las cuentas no son del mismo tipo")
        }

    }else{
        alert("No existe alguna de las cuentas")
    }

}

*/