//SOBREESCRITA

const pessoa = {
    idade: 18
}

const tay = {
    nome: 'Tayna',
    idade: 21, //se o JS achar o valor aqui ele retorna. Se não encontrar continua procurando
    __proto__: pessoa
}

console.log(tay.idade);