function iniciar() {
   var nome = document.getElementById("result").value
   if (nome) {
    localStorage.setItem('nome', nome)
    window.location.href = "pergunta1.html"
   } else{
        alert("Por favor, digite seu nome...")
   }

}
