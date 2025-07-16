/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa aduta.

    Fórmula do IMC:
    IMC = peso / (altura*altura)

    Elabore um algoritmo que dado o peso e a altura de uma adulto mostre sua condição de acordo ccom a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade grave;
*/

const peso = 85 ;
const altura = 1.58;
const IMC = peso / (altura*altura);

if(IMC < 18.5){
    console.log('IMC: ' + IMC.toFixed(0) + ' Abaixo do peso');
}else if(IMC >= 18.5 && IMC.toFixed(0) <= 25){
    console.log('IMC: ' + IMC.toFixed(0)+ ' Peso normal');
}else if(IMC > 25 && IMC.toFixed(0) <=30){
    console.log('IMC: ' + IMC.toFixed(0) + ' Acima do peso');
}else if(IMC >30 && IMC <=40){
    console.log('IMC: ' + IMC.toFixed(0) + ' Obeso');
}else{
    console.log('IMC: ' + IMC.toFixed(0) + ' Obesidade grave');
}