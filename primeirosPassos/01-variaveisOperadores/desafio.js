/* 
Faça um programa para calcular o valor de uma viagem
Você terá 3 variáveis,sendo elas:
    1- Preço do combustível
    2- Gasto médio do combustível
    3- Distância em KM da viagem;
Imprima no console o valor que será gasto de combustível para realizar a viagem.
*/

const precoCombustivel = 5.79;
const consumoMedio = 12;
const distancia = 300;

const valorGasto = (distancia/consumoMedio)*precoCombustivel;
console.log('R$'+ valorGasto.toFixed(2));

