let valores = [7.8, 8.6, 7.3, 5.5]
console.log(valores[0], valores[3])
console.log(valores[4]) ///buscar um valor inexistente no arrays não gera um erro!

valores [10] = 10 
console.log(valores)
console.log(valores.length)//vai dizer quantos elementos tem no arrays!

valores.push({id: 3}, false, null, 'teste')///essa função vai adicionar novos elementos no arrays.
console.log(valores)

console.log(valores.pop())//vai tirar o ultimo valor do arrays.
delete valores[0]//vai deletar o primeiro elemento do arrays.
console.log(valores)
console.log(typeof valores)//tipo de valor do arrays.