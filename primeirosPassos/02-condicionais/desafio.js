/* 
Faça um programa para calcular o valor de uma viagem
Você terá 5 variáveis,sendo elas:
    1- Preço do etanol
    2- Preço da gasolina
    3- O tipo de combustível que está no carro;
    4- Gasto médio de combustível do carro por KM
    5- Distância em KM da viagem;
Imprima no console o valor que será gasto de combustível para realizar a viagem.
*/

const precoEtanol = 4.13;
const precoGasolina = 6.14;
const tipoCombustivel = 'Gasolina';
const gastoCombustivel = 12;
const distancia = 300;

if(tipoCombustivel === 'Etanol'){
    const valorGastoEtanol = (distancia/gastoCombustivel)*precoEtanol;
    console.log('O valor gasto será de: R$' + valorGastoEtanol.toFixed(2));
}else if(tipoCombustivel === 'Gasolina'){
    const valorGastoGasolina = (distancia/gastoCombustivel)*precoGasolina;
    console.log('O valor gasto será de: R$' + valorGastoGasolina.toFixed(2));
}else{
    console.log('Algo deu errado');
}