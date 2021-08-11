function solucao(obras) {
	let obraMaisValiosa = obras[0].valor;
    let resultado = []
    for ( let obra of obras){
        if( obra.valor >= obraMaisValiosa){
            obraMaisValiosa = obra.valor;
            resultado = obra;
           
        }
        
    }
     console.log(resultado.nome)
}
