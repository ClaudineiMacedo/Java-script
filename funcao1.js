// Função sem retorno
function imprimirSoma(a, b){
    console.log(a * b)
}
imprimirSoma(6, 8)
imprimirSoma(6)
imprimirSoma(3, 2, 6 , 8, 7)

//Função com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(9, 7))
console.log(soma(19))