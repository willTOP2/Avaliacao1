class Process{



    Map(boleto){

        return boleto.map(Array => Array.valorPago) 
        
     }
    


    QuantidadeBoleto(boleto)
    {
    
      return boleto.length 
      
    }

}

module.exports = Process