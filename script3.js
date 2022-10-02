
let contador = 0;

for (let i=1; i< 21 ; i++){
 /* lo de i % 2 es si es divisible por 2 */   

    if (i % 2 !=0){
        /*voy acumulando  puede escribirse contador +=i   */
        contador = contador +i;
        if(i==1){
            console.log("Tengo " +i+" oveja")
        }else{
            console.log("Tengo " +i+" ovejas")
        }
    }else{
        continue;
    }
    alert("la suma total es de ovejas es "+ contador)
}



/*

for (let i=1; i< 20 ; i++){
     lo de i % 2 es si es divisible por 2
       
       if (i % 2 ==0){
        continue;
       if(i==1){
           console.log("Tengo " +i+" oveja")
       }else{
           console.log("Tengo " +i+" ovejas")
       }
       
    }
   
   }

   */