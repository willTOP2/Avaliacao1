class Process{


    SomaBoletos(boleto){
        const somar = boleto.reduce(function(soma, i){
          return soma + i.valorPago
       }, 0) 
         return somar
      
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