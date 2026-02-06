let num = [5, 8, 2, 9, 3]
num.sort()
console.log(`nosso vetor tem ${num.length} posicoes`)
console.log(num[0])

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`esse número não existe`)
}
console.log(`O valor 4 está na posição ${pos}`)