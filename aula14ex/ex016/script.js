function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO - Faltam dados')
        resultado.innerHTML = 'Impossível contar.'
    } else {
        resultado.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
           window.alert('Passo inválido') 
        }
        if (i < f) /*contagem crescente */{
             for(var c = i; c <= f; c += p) /*for (inicio; teste; incremento) */{
            resultado.innerHTML += `${c}\u{1F449} `
             }
        resultado.innerHTML += `\u{1F3C1}`
        }
       else /*contagem regressiva */{
        for(var c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c}\u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
       } 

    }
}