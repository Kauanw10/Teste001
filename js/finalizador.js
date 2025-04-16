function finishQuiz() {
    // Recupera a resposta das pergunta
    var resposta10 = document.querySelector('input[name="q10"]:checked');
    
    if (resposta10) {
        // Recupera a resposta da primeira pergunta armazenada
       
         var resposta9 = localStorage.getItem('resposta9');
        
         localStorage.setItem('resposta9', resposta9);
         localStorage.setItem('resposta10', resposta10.value);
        if(resposta10 === q10a){
            alert('Certa resposta!')
        }else{
            alert('Resposta errada')
        }

        // Redireciona para a página de resultados
        window.location.href = 'resultado.html'; // A página onde as respostas serão exibidas
    } else {
        // Caso o usuário não tenha selecionado uma resposta para a segunda pergunta
        alert("Por favor, selecione uma resposta antes de finalizar.");
    }
}

