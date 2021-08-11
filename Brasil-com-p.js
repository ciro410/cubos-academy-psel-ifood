function solucao(primeiraLetra, segundaLetra, palavras) {
    let resultado = 0;;
    for (let palavra of palavras){
        if(palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
            console.log(palavra)
            
            }else{
                resultado ++;
            } 
                
    }
    if(resultado === palavras.length){
        console.log("NENHUMA")
    }
    
    }