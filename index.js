// readline - permite que lidemos com entrada e saída
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin, // entrada de um fluxo de texto
    output: process.stdout // saída de um fluxo de texto 
})

let question = () => {
    return new Promise((resolve) => rl.question('', resolve))}
console.log('Digite uma propriedade css.')

let propertiesOrdered = []

async function ordered() {
     let properties = await question() // retornando valor final da promise

    while (properties === '') {
         console.log('Digite uma propriedade e depois digite "sair" para ordenar propriedades.')   
         properties = (' ')
     }
    if (properties === 'sair') {
        console.log(propertiesOrdered .sort( )) // usuário digitar sair, que seja ordenada suas propriedades
        rl.close()
     } 

propertiesOrdered .push(properties) 
ordered()
}

ordered()