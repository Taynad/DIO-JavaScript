//First Class Functions
//Higher Order Functions
//funções podem variar objetos conseguimos atribuir funções a variaveis

/*function falarMeuNome(){
    console.log('Tayna ');
}

function falarMeuNomeCompleto (falarMeuNome){
    falarMeuNome();
    console.log('Dos Santos');
}

falarMeuNomeCompleto(falarMeuNome);
*/

//Declarando funções: declaração explícita e Arrow function
function funcao1 (){
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
}

const tay = {
    nome: 'Tayna',
    funcao1,
    funcao2
}

tay.funcao1(); //se precisar usar o contexto deve utilizar a função explicita
tay.funcao2(); //aqui o obj não aparece
