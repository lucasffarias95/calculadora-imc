const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classeficacao ="";

        if(valorIMC < 18.5 ) {
            classeficacao = 'abaixo do peso';
        }else if (valorIMC < 25) {
            classeficacao = 'Com o peso ideal, parabens!!';
        }else if (valorIMC < 30){
            classeficacao = 'Levemente acima do peso';
        }else if (valorIMC < 35) {
            classeficacao = 'Você está com obesesidade grau I';
        }else if (valorIMC < 40) {
            classeficacao = 'Você está com obesidade grau II';
        }else {
            classeficacao = 'Obesidade grau III. Cuidado!!'
        }
        
        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você está ${classeficacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);
