function parimpar (n) {
    if(n%2 == 0) {
       return 'par!' 
     } else {
        return 'impar!'
        }
    }

   let res = parimpar(4)
   console.log(res)

   // só aparece o resultado porque colocamos dentro de uma variável. se não chamasse o let res = parimpar ele nao entrega nenhum valor, mesmo os dados da funcão estando corretos.//
   
