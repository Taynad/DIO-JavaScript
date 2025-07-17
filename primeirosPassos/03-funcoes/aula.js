//usar o return nas funções
function calcularIMC(peso, altura){
    return  peso / (altura*altura);

}

function classificarIMC(imc){
    if(imc < 18.5){
        return  ' Abaixo do peso';
    }else if(imc >= 18.5 && imc.toFixed(0) <= 25){
        return ' Peso normal';
    }else if(imc> 25 && imc.toFixed(0) <=30){
        return ' Acima do peso';
    }else if(imc >30 && imc <=40){
        return ' Obeso';
    }else{
        return ' Obesidade grave';
    }

}

//função principal
//essa função é chamada imediamentamente colocando os parenteses
//nesse caso não precisa do nome da função
(function (){
    const peso = 60;
    const altura = 1.58;

    const imc = calcularIMC(peso,altura);
    console.log(classificarIMC(imc));

})();







