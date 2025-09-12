const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//forEach
lista.forEach((value, i, listRef) => {
    console.log(value + i);

})
//filter
const listaPar = lista.filter((elemento, i, listaRef) =>{
    return (elemento % 2 === 0);
});

//reduce
const somaNumeros = lista.reduce((previous, current) => {
    return previous + current;
})

console.log(somaNumeros);


console.log(listaPar);

class Pessoa{
    constructor(name){
        this.name = name;
    }
}

const listPeople = [new Pessoa('Tayna'), new Pessoa("Kauan"), new Pessoa('Cecília'), new Pessoa('Nice')];

//map converte um elemento em outro
const listaNomes = listPeople.map((value)=> {
    return value.name;
});

console.log(listaNomes);

//join
const listNumber = [1, 2, 3];
console.log(listNumber.join('/'));