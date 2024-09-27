// Seleciona o botão e o conteúdo da notícia
const noticia1 = document.getElementById('dica1');
const icone1 = document.getElementById('dica1');

// Adiciona o evento de clique no ícone
icone1.addEventListener('click', function() {
    // Alterna a classe 'ativa' para expandir e mudar a cor
    dica1.classList.toggle('ativa');
});