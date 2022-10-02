/*

let num = 7;

if (num < 10){
    alert("El numero es menor a 10")
}else if (num > 10){
    alert("El numero es mayor que 10")
}else {
    alert("el numero es igual a 10")
}

*/

let respuesta = confirm("confirma que usted es mayor de edad?") 

if (respuesta == true){
    console.log("puede pasar");
}
else{
    let respuesta2 = confirm("tenes permiso de tus padres")
    if (respuesta == true){
        console.log("puede pasar");
    }
    else{
        console.log("No podes pasar")
    }
}