class Process{

    verificar(fatura, pagamento){
  

        const a =  pagamento.valorPago >= fatura.valorTotal ? 'fatura marcada como paga' : 'fatura nao marcada como paga'
         return a
     
        }
     

    SomaBoletos(boleto){
        const somaResult =  boleto.reduce(function(soma, i){
          return soma + i.valorPago
       }, 0) 
       return somaResult
         
       }
      
    
       processa(fatura, valores, qtd, verificacao) {
    

     
        const resutl = 'Fatura de ' + fatura.valorTotal.toFixed(2) + ' com ' + qtd + ' boletos valor de ' 
        + valores + '  ' + verificacao + ' e ' + qtd + 
        ' pagamento  do tipo boleto criado'
   
      return resutl 
   } 
   


    Map(boleto){

        return boleto.map(Array => Array.valorPago) 
        
     }
    


    QuantidadeBoleto(boleto)
    {
    
      return boleto.length 
      
    }

}

module.exports = Process