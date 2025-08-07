const alunos = ['Tayna', 'Kauan', 'Cecilia'];
//adicionando elementos
alunos.push('Julia');
//remove o último elemento
console.log(alunos.pop());
//remove o primeiro elemento
console.log(alunos.shift());
console.log(alunos);

console.log('---------------------')

const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const nome = 'Tayna dos Santos';

//estrutura de repetição
let soma =0
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma/notas.length;
console.log(media);



