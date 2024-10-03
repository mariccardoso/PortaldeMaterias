// Seleciona o botão e o conteúdo da notícia
const dica1 = document.getElementById('dica1');
const icone1 = document.getElementById('dica1');

// Adiciona o evento de clique no ícone
icone1.addEventListener('click', function() {
    // Alterna a classe 'ativa' para expandir e mudar a cor
    dica1.classList.toggle('ativa');
});

// Seleciona o botão e o conteúdo da notícia
const dica2 = document.getElementById('dica2');
const icone2 = document.getElementById('dica2');

// Adiciona o evento de clique no ícone
icone2.addEventListener('click', function() {
    // Alterna a classe 'ativa' para expandir e mudar a cor
    dica2.classList.toggle('ativa');
});