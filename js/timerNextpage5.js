// Inicializa o tempo do temporizador para 30 segundos
    var timer = 30;

    // Função para atualizar o contador de tempo a cada segundo
    var interval = setInterval(function() {
        timer--; // Decrementa o tempo
        document.getElementById("timer").textContent = "Tempo restante: " + timer + "s"; // Atualiza o texto do temporizador

        // Se o tempo chegar a zero, para o contador e avisa o usuário
        if (timer === 0) {
            clearInterval(interval); // Para o temporizador
            alert("Tempo esgotado!"); // Exibe mensagem de tempo esgotado
            goToPage6(); // Redireciona para a segunda página mesmo se o tempo terminar
        }
    }, 1000); // Atualiza o contador a cada 1000ms (1 segundo)

    // Função que é chamada ao clicar no botão "Próxima"
    function goToPage6() {
        // Verifica se o usuário selecionou uma resposta

        var resposta5 = document.querySelector('input[name="q5"]:checked');
       
        if (resposta5) {
            // Armazena a resposta no localStorage para uso na segunda página
            var resposta4 = localStorage.getItem('resposta4');

         
            localStorage.setItem('resposta4', resposta4);
            localStorage.setItem('resposta5', resposta5.value);
        if(resposta5 === q5b){
            alert('Certa resposta!')
        }else{
            alert('Resposta errada')
        }
            // Redireciona para a segunda página do quiz
            window.location.href = "pergunta6.html";
        } else{
            // Caso não tenha escolhido uma resposta, exibe um alerta
            alert("Por favor, selecione uma resposta.");
        }
    }
