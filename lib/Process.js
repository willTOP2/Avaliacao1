class Process{


    SomaBoletos(boleto){
         boleto.reduce(function(soma, i){
          return soma + i.valorPago
       }, 0) 
         
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