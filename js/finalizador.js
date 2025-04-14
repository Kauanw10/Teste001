function finishQuiz() {
    // Recupera a resposta da segunda pergunta
    var resposta2 = document.querySelector('input[name="q2"]:checked');
    
    if (resposta2) {
        // Recupera a resposta da primeira pergunta armazenada
        var resposta1 = localStorage.getItem('resposta1');

        // Armazena as respostas no localStorage para serem usadas na página de resultados
        localStorage.setItem('resposta1', resposta1);
        localStorage.setItem('resposta2', resposta2.value);

        // Redireciona para a página de resultados
        window.location.href = 'resultado.html'; // A página onde as respostas serão exibidas
    } else {
        // Caso o usuário não tenha selecionado uma resposta para a segunda pergunta
        alert("Por favor, selecione uma resposta antes de finalizar.");
    }
}

