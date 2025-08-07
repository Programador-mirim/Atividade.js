//1. Saudação personalizada
//Crie uma variável chamada nome e exiba no console a mensagem:

let nome = "Elias"
console.log("Olá, " + nome)

//2. Calculadora simples
//Crie duas variáveis com números e mostre no console:
//Soma
//Subtração
//Multiplicação
//Divisão

let num1 = 1
let num2 = 2
let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

console.log(num1 + " + " + num2 + " = " + soma)
console.log(num1 + " - " + num2 + " = " + subtracao)
console.log(num1 + " * " + num2 + " = " + multiplicacao)
console.log(num1 + " / " + num2 + " = " + divisao)

//3. Verificador de maioridade
//Crie uma variável idade.
//Se for maior ou igual a 18, mostre: 
//Senão, mostre:

let idade = 17
if (idade >= 18) {
    console.log("Você é maior de idade")
}
else {
    console.log("Você é menor de idade")
}

//4. Classificação de nota
//Crie uma variável nota e classifique o aluno:
//Aprovado (nota >= 7)
//Recuperação (nota entre 5 e 6.9)
//Reprovado (nota < 5)

let nota = 7
if (nota >= 7) {
    console.log("Aprovado")
}
else if (nota >= 5 && nota <= 6.9) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}

//5. Tabuada com for
//Mostre no console a , do 1 ao 10.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//6. Números pares
//Mostre no console os .

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}

//7. Contagem regressiva com while
//Mostre no console os números de , usando while.
let contador = 10
while (contador >= 1) {
    console.log(contador)
    contador--
}

//8. Múltiplos de 5
//Mostre os .

for (let i = 5; i <= 100; i += 5) {
    console.log(i)
}

//9. Calculadora de IMC
//Crie as variáveis peso e altura.
//Calcule o IMC e classifique:
//Abaixo do peso (IMC < 18.5)
//Peso normal (18.5 a 24.9)
//Sobrepeso (25 a 29.9)
//Obesidade (30 ou mais)

let peso = 60
let altura = 1.70
let imc = peso / (altura * altura)
if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso")
}
else {
    console.log("Obesidade")
}

//10. Classificador de idade
//Crie uma variável idade
//Mostre:
//“Criança” (até 12 anos)
//“Adolescente” (13–17)
//“Adulto” (18–59)
//“Idoso” (60+) 
//Em seguida, mostre os .

let idade_do_usuario = 18
if (idade_do_usuario <= 12) {
    console.log("Crianca")
}
else if (idade_do_usuario >= 13 && idade_do_usuario <= 17) {
    console.log("Adolescente")
}
else if (idade_do_usuario >= 18 && idade_do_usuario <= 59) {
    console.log("Adulto")
}
else {
    console.log("Idoso")
}