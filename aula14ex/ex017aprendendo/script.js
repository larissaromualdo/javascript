function tabuada() {
    var number = document.getElementById('number')
    var gerar = document.getElementById('gerar')

    if (number.value.length == 0) {
    window.alert('Por favor, digite um número')
    } else { 
    var n = Number(number.value)
    gerar.innerHTML = ''
    
    for(var c = 1; c <= 10; c++) { 
        var item = document.createElement('p')
        item.textContent = `${n} x ${c} = ${n*c}`
        gerar.appendChild(item)
    } 
    
}
}