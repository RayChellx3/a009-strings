// 1- Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
let nome = prompt ("Qual seu nome?")
let cor = prompt ("Qual sua cor favorita?")
let citacao = prompt("Qual sua citação favorita?")

// A cor favorita de pessoa é cor;
console.log ("A cor favorita de" + nome + "é", cor)

// Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings.

// 2- COM CONCATENAÇÃO
console.log ("A cor favorita de" + nome + "é" + cor)

// 2.1- COM TEMPLATE STRING
console.log(`A cor favorita de ${nome} é ${cor}`)
// colocar ` em vez de ' para funcionar 

// 3- Altere a primeira string para que a pessoa também envie sua citação favorita. 
console.log(`A cor favorita de ${nome} é ${cor} .E sua citação favorita é ${citacao}`)

// 3.1- Essa citação deve ser impressa entre aspas.
console.log ("A cor favorita de" + nome + "é" + cor + "e sua citação favorita é \"" + citacao + "\".")

// 4- Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

// 5- Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
const nomeMaiusculo = nome.toLocaleUpperCase()
console.log ("A cor favorita de" + nomeMaiusculo + "é" + cor + "e sua citação favorita é \"" + citacao + "\".")

// 6- Exiba no console quantos caracteres tem o nome da pessoa.

console.log(`Quantidade de letras do seu nome: ${nome.length}`)

// 7- Cheque se o nome da pessoa possui a letra A
const verificarLetra = nome.includes("i")
console.log("Seu nome tem letra I?" + verificarLetra)
