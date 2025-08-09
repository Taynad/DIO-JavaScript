/*
    2) Faça um programa que receba N (quantidades de números) e seus respectivos valores
    - Imprima o maior número par e o menor número ímpar
    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8
        Saída:
            Maior número par: 10
            Menor número ímpar: 1
*/

const {gets, print} = require('./funcoes-auxiliares-exerc02');

const n = gets(); //pego o numero de elementos (indice)
let maiorNumeroPar = null; //quando não tiver um valor
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numbers = gets();

    if(numbers % 2 === 0){
        if(maiorNumeroPar === null || numbers > maiorNumeroPar){
            maiorNumeroPar = numbers
        }
    }else{
        if(menorNumeroImpar === null || numbers < menorNumeroImpar ){
            menorNumeroImpar = numbers;
        }
    }
}


print('Maior número par: ' + maiorNumeroPar);
print('Menor número ímpar: ' + menorNumeroImpar);