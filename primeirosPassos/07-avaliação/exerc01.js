/*
    1) Faça um programa que receba a média de um aluno.
        - Caso a média seja < 5 imprima "Reprovado"
        - Caso a média seja >= 5 imprima "Recuperação"
        - Caso a média seja >= 7 imprima "Aprovado"
*/

const {gets, print } = require('./funcoes-auxiliares-exerc01');

const media = gets();

    if(media < 5){
        print("Reprovado");
    }else if(media >= 5 && media < 7){
        print("Recuperação")
    }else{
        print("Aprovado")
    }
