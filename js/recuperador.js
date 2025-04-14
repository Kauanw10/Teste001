window.onload = function() {
    // Recupera as respostas armazenadas
    const respostas = [
        localStorage.getItem('resposta1'),
        localStorage.getItem('resposta2')
    ]  
    
    // Verifica se as respostas estão armazenadas corretamente
    if (respostas) {
        // Exibe as respostas na div de resultado
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `Você respondeu:<br>Pergunta 1: ${respostas[0]}<br>Pergunta 2: ${respostas[1]}`;
    } else {
        // Caso as respostas não sejam encontradas, avisa o usuário
        document.getElementById("resultado").innerHTML = "Não foi possível encontrar suas respostas.";
    }

};


    // Recupera as respostas armazenadas
    // var resposta1 = localStorage.getItem('resposta1');
    // var resposta2 = localStorage.getItem('resposta2');

    // Verifica se as respostas estão armazenadas corretamente
    // if (resposta1 && resposta2) {
    //     // Exibe as respostas na div de resultado
    //     var resultadoDiv = document.getElementById("resultado");
    //     resultadoDiv.innerHTML = `Você respondeu:<br>Pergunta 1: ${resposta1}<br>Pergunta 2: ${resposta2}`;
    // } else {
    //     // Caso as respostas não sejam encontradas, avisa o usuário
    //     document.getElementById("resultado").innerHTML = "Não foi possível encontrar suas respostas.";
    // }

