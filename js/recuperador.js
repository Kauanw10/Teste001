window.onload = function() {
    // Recupera as respostas armazenadas
    const respostas = [
        localStorage.getItem("nome"),
        localStorage.getItem("resposta1"),
        localStorage.getItem("resposta2"),
        localStorage.getItem("resposta3"),
        localStorage.getItem("resposta4"),
        localStorage.getItem("resposta5"),
        localStorage.getItem("resposta6"),
        localStorage.getItem("resposta7"),
        localStorage.getItem("resposta8"),
        localStorage.getItem("resposta9"),
        localStorage.getItem("resposta10")
    ]  
    
    // Verifica se as respostas estão armazenadas corretamente
    if (respostas) {
        // Exibe as respostas na div de resultado
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `${respostas[0]} você respondeu:
        <br> Pergunta 1: ${respostas[1]}
        <br> Pergunta 2: ${respostas[2]}
        <br> Pergunta 3: ${respostas[3]}
        <br> Pergunta 4: ${respostas[4]}
        <br> Pergunta 5: ${respostas[5]}
        <br> Pergunta 6: ${respostas[6]}
        <br> Pergunta 7: ${respostas[7]}
        <br> Pergunta 8: ${respostas[8]}
        <br> Pergunta 9: ${respostas[9]}
        <br> Pergunta 10: ${respostas[10]}
        `;
    } else {
        // Caso as respostas não sejam encontradas, avisa o usuário
        document.getElementById("resultado").innerHTML = "Não foi possível encontrar suas respostas.";
    }

};


