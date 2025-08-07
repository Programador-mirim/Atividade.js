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