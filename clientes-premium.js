function solucao(precos) {
    let soma = 0;
    for(const preco of precos){
        soma+= preco;
    }
        if (soma>1000){
        for(const preco of precos){   
            if(preco>200){
            console.log("PREMIUM")
            break;
            }else if (preco <=200){
                console.log("VIP")
                break;
            }
        }
        }else{
            console.log("NORMAL")
        }
   
    
}