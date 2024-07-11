// Função para redirecionar para o quiz
function redirecionarParaQuiz() {
    window.location.href = 'https://youtu.be/_WplTiEGMPI?si=S5X6jx1CLH--Tdu8'; // Substitua 'quiz.html' pelo URL correto da página do quiz
}

// Event listener para o clique no botão de inscrição
document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        redirecionarParaOutroSite(); // Chama a função de redirecionamento
    });
});
