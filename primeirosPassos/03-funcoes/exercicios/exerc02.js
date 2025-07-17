/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - Á vista Débito, recebe 10% de desconto;
    - Á vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaPagamento = 3;
const desconto = 15;

function calcularDesconto(precoProduto, desconto){
    return (precoProduto - (precoProduto/desconto).toFixed(2));

}

function calcularJuros(precoProduto, juros){
    return (precoProduto + (precoProduto* (juros/100)));

}



if(formaPagamento === 1){
    console.log('O valor será de: R$' + calcularDesconto(precoProduto,desconto ));

}else if(formaPagamento === 2){
    console.log('O valor será de: R$' + calcularDesconto(precoProduto, desconto));

}else if(formaPagamento === 3){
    
    console.log('O valor será de: R$' + calcularJuros(precoProduto, 10));

}else{
    console.log('O valor será de: R$' + precoProduto.toFixed(2));
}