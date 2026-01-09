function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) /*voce utiliza length para comprovar que algo foi escrito dentro dessa variavel. apenas para o preenchimento, e não equivale ao valor 0 */{
        window.alert('ERRO - faltam dados')
    } else {
        res.innerHTML = 'Contando...' /*trocando o escrito da div de preparando a contagem para contando. */
        var i = Number(inicio.value) /* voce está pegando o que foi digitado dentro da variavel e convertendo para um número. */
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        } /* o contador irá comecar no inicio, enquanto o contador for menor ou igual a f, ele continua contando, o contador vai receber ele mesmo, mais o passo. 
        lembrando = for(inicio, teste, incremento) */
    } for (var c = i; c <= f; c -= p) {
        res.innerHTML -= `${c} `
    }
}
