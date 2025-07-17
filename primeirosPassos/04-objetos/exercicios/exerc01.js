/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar o percurso.
*/

class Carros{
    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor,gastoMedioCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularGastoCombustivel(precoCombustivel, percursoEmKm){
        return ((percursoEmKm/this.gastoMedioCombustivel)*precoCombustivel).toFixed(2);

    }
}

const celta = new Carros('Volkswagen', 'Cinza', 12);
console.log('R$' + celta.calcularGastoCombustivel(5, 70));