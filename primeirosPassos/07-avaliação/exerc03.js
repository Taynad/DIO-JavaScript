/*
    3) Faça um programa que calcule e imprima o salário a sere transferido para um funcionário.
        - Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios
        - O salário a ser transferido é calculado da seguinte maneira:
            salarioTransferido = valor bruto do salário - percentual de imposto media a faixa salarial + adicional dos benefícios
            valorImposto = salarioBruto * imposto;
             

            Para  calcular o percentual de imposto segue as alíquotas:
                - De R$0.00 a R$1100.00 = 5.00%
                - De R$1100.00 a R$2500.00 = 10.00%
                - maior que R$2500.00 = 15.00%
        Exemplo:    
            Entrada
                2000
                250
            Saída:
                2050.00
*/

const {gets, print} = require('./funcoes-auxiliares-exerc03');
const salarioBruto = gets();
const beneficio = gets();

function calculoSalarioTransferido(salarioBruto, valorImposto, beneficio){
    valorImposto = salarioBruto * valorImposto;
    salarioTransferido = salarioBruto - valorImposto + beneficio;
    return salarioTransferido;
}

function analiseSalarioImposto(){
    if(salarioBruto >= 0 && salarioBruto < 1100){
       return calculoSalarioTransferido(salarioBruto, 0.5, beneficio).toFixed(2);
    }else if(salarioBruto >=1100 && salarioBruto < 2500){
        return calculoSalarioTransferido(salarioBruto, 0.10, beneficio).toFixed(2);
    }else{
        return calculoSalarioTransferido(salarioBruto, 0.15, beneficio).toFixed(2);
    }
}

print(analiseSalarioImposto());






