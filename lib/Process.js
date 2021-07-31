class Process{



    Map(boleto){

        const map = boleto.map(Array => Array.valorPago) 
        return map 
     }
    


    QuantidadeBoleto(boleto)
    {
    
      return boleto.length 
      
    }

}

module.exports = Process