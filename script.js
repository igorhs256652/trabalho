document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificação básica
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se o email tem formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Simulação do envio
    alert("Mensagem enviada com sucesso!\n\nNome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);

    // Aqui você poderia limpar o formulário, se quiser
    document.getElementById("contatoForm").reset();
});