//ASYNC AWAIT
const fs = require ('fs');

async function buscarArquivo(){
    try{
        const arquive = await fs.promises.readFile('tarefas.csv')
        const textoDoArquivo = arquive.toString('utf-8');
        console.log(textoDoArquivo);
    }catch (error){
        console.log(error);

    }
}

buscarArquivo();