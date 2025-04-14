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
            goToPage2(); // Redireciona para a segunda página mesmo se o tempo terminar
        }
    }, 1000); // Atualiza o contador a cada 1000ms (1 segundo)

    // Função que é chamada ao clicar no botão "Próxima"
    function goToPage2() {
        // Verifica se o usuário selecionou uma resposta
        var resposta1 = document.querySelector('input[name="q1"]:checked');
        if (resposta1) {
            // Armazena a resposta no localStorage para uso na segunda página
            localStorage.setItem('resposta1', resposta1.value);

            // Redireciona para a segunda página do quiz
            window.location.href = "lastpage.html";
        } else {
            // Caso não tenha escolhido uma resposta, exibe um alerta
            alert("Por favor, selecione uma resposta.");
        }
    }
