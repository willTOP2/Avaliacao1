const Sistema = require('../lib/Process')
const {toBeDeepCloseTo} = require('jest-matcher-deep-close-to')
expect.extend( { toBeDeepCloseTo})

const sistema  = new Sistema()


describe('Processador de boleto', () => {



  const fatura = {
    nome: "Jose da Silva", 
    data: "28/09/2020", 
    valorTotal: 11300.00
  }
  

     const boleto = [{

     codigo: 3459, 
     data: "23/04/2009", 
     valorPago: 1300.00

     },

       {
         codigo: 234, 
         data: "25/06/2020", 
         valorPago: 100.00
       },
       {
       codigo: 345, 
       data: "23/04/2010", 
       valorPago: 100.00
       },
       {
       codigo: 34, 
       data: "23/04/2011", 
       valorPago: 1200.00
       }

    ]

    const pagamento =  {

   
      valorPago: 1300.00,
      data: "12/04/2021",
      tipoPagamento: "boleto"
     
  
      }
      

    const qtd = sistema.QuantidadeBoleto(boleto) 
  
    
 test(' quantidade de boletos', () => {
  expect(qtd).toBe(4) 


})


    })

      
   
  





