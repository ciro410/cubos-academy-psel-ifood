function solucao(sequencia) {
    let direita = 0;
    let esquerda = 0 ;
	for ( let item of sequencia){
        if ( item === ">"){
            direita ++
            } else {
                esquerda ++
            }
    }
 
 if (direita - esquerda === 0  || (direita - esquerda) % 7 === 0){
     console.log("0")
     }if ((direita - esquerda) % 7 === 1 ||(direita - esquerda) % 7 === -6){
     console.log("1")
     }if ((direita - esquerda) % 7 === 2 || (direita - esquerda) % 7 === -5){
     console.log("2")
     }if ((direita - esquerda) % 7 === 3 ||(direita - esquerda) % 7  === -4){
     console.log("3")
     }if ((direita - esquerda) % 7 === 4 ||(direita - esquerda) % 7  === -3){
     console.log("4")
     }if ((direita - esquerda) % 7 === 5 || (direita - esquerda) % 7 === -2){
     console.log("5")
     }if ((direita - esquerda) % 7 === 6 ||(direita - esquerda) % 7 === -1){
     console.log("6")
     }
}