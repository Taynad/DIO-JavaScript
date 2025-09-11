/*const pessoa = {
    genero: 'Feminino'
};

const tayna = {
    nome: 'Tayna dos Santos',
    idade: 21,
    __proto__: pessoa //através do __proto__ passamos a herança
};

console.log(tayna.genero);
*/

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}

//posso usar para criar uma função
Pessoa.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`);
}

const tay = new Pessoa('Tayna', 21);
tay.falar();