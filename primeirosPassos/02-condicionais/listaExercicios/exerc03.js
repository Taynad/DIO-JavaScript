/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - Á vista Débito, recebe 10% de desconto;
    - Á vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 200;
const formaPagamento = 1;
let desconto = 0;
let juros = 0;
let precoDesconto = 0;

if(formaPagamento === 1){
    desconto = precoProduto/10;
    precoDesconto = precoProduto - desconto;
    console.log('O valor será de: R$' + precoDesconto.toFixed(2));

}else if(formaPagamento === 2){
    desconto = precoProduto/15;
    precoDesconto = precoProduto - desconto;
    console.log('O valor será de: R$' + precoDesconto.toFixed(2));

}else if(formaPagamento === 3){
    juros = precoProduto * 0.10;
    const precoJuros = precoProduto + juros;
    console.log('O valor será de: R$' + precoJuros.toFixed(2));

}else{
    console.log('O valor será de: R$' + precoProduto.toFixed(2));
}

