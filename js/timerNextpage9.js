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
            goToPage10(); // Redireciona para a segunda página mesmo se o tempo terminar
        }
    }, 1000); // Atualiza o contador a cada 1000ms (1 segundo)

    // Função que é chamada ao clicar no botão "Próxima"
    function goToPage10() {
        

        var resposta9 = document.querySelector('input[name="q9"]:checked')

        if (resposta9) {
            // Armazena a resposta no localStorage para uso na segunda página
          var resposta8 = localStorage.getItem('resposta8');

  
            localStorage.setItem('resposta8', resposta8);
            localStorage.setItem('resposta9', resposta9.value);
        if(resposta9 === q9a){
            alert('Certa resposta!')
        }else{
            alert('Resposta errada')
        }
            // Redireciona para a segunda página do quiz
            window.location.href = "pergunta10.html";
        } else{
            // Caso não tenha escolhido uma resposta, exibe um alerta
            alert("Por favor, selecione uma resposta.");
        }
    }
