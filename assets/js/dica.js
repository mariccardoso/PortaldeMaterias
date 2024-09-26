// Seleciona o botão e o conteúdo da notícia
const noticia1 = document.getElementById('noticia1');
const icone1 = document.getElementById('icone1');

// Adiciona o evento de clique no ícone
icone1.addEventListener('click', function() {
    // Alterna a classe 'ativa' para expandir e mudar a cor
    noticia1.classList.toggle('ativa');
});