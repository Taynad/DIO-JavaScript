//assincronismo é quando algo não executa imediatamente, demora um tempo
//processo algo e se der certo chamo o resolve, se der errado chamo o reject

/*const promessa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const numero = parseInt(Math.random() * 100);
        resolve(numero);
    }, 1000)
});

promessa
    .then((value) =>{
    console.log(value)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(()=> {
        console.log('Finalizou');
    })
*/

const { error } = require('console');
const fs = require ('fs');

const leituraDoArquivo = fs.promises.readFile('tarefas.csv');

leituraDoArquivo
    .then((arquivo) =>arquivo.toString('utf-8'))
    .then((texto) => texto.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaTarefas) => console.log(listaTarefas))
    .catch((error)=> {
    console.log('Deu ruim!' + error);
    })