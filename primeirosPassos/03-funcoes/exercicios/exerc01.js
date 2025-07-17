//return só devolve o valor.
//Para exibir no terminal você precisa do console.log()

function imprimindoNome(nome){
   return 'Meu nome é ' + nome;
}

console.log(imprimindoNome('Tayna'));
console.log(imprimindoNome('Cecilia'));

function verificandoMaioridade(idade){
    if(idade >= 18){
        console.log(imprimindoNome('Tayna') + ' Maior de idade');
    }else{
        console.log('Menor de idade');
    }
}

verificandoMaioridade(21);
