// = é para atribuir valor
// == se o elemento é igual (o js faz coversão de tipo)
// === se é igual literalmente sem fazer conversão

const numero = 22;
const isNumeroPar = (numero % 2)  === 0;

if(isNumeroPar){
    console.log('O número ' + numero + ' é par!');
}else{
    console.log('O  número ' + numero + ' é ímpar');
}
