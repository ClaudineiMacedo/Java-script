//string e fatiamento de string.
const escola = 'Cod3r'

console.log(escola.charAt(4))//significa que ele vai me mostra a letra que esta na posição 4 da frase.
console.log(escola.charCodeAt(3))//vai trazer o valor da letra dentro da tabela unicode.
console.log(escola.indexOf('3'))//mostra o indice associado a frase 'escola'.
console.log(escola.substring(1))//vai mostra a frase da indice selecionado para frente.
console.log(escola.substring(0, 3))//vai fatiar a string onde vc selecionar o indece.
console.log('escola '.concat(escola).concat(' !'))//vc vai juntar string letras ou simbolos.
console.log(escola.replace(3, 'e'))//vai subtituir o indice pela letra 'e'.
console.log('Ana,Maria,Simone'.split(','))//separador de string.

