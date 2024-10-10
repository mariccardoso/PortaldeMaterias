// Função para passar o mouse para o cardBlack
function funçãoPassarMouseBlack() {
    const card = document.getElementById("cardBlack");
    card.innerHTML = "Desenvolvedores criam e mantêm sistemas que automatizam processos industriais, melhorando a eficiência e precisão nas operações. Eles trabalham com a programação de softwares e a integração de sistemas para otimização. Na indústria química, sistemas automatizados são essenciais para controlar reações, processos produtivos e garantir a precisão nas dosagens e misturas de substâncias."; // Muda o texto
    card.style.color = "white"; // Muda a cor do texto para branco
}

// Adiciona o evento mouseenter
document.getElementById("cardBlack").addEventListener("mouseenter", funçãoPassarMouseBlack);

// Se você quiser reverter ao passar o mouse para fora
document.getElementById("cardBlack").addEventListener("mouseleave", function() {
    const card = document.getElementById("cardBlack");
    card.innerHTML = "Desenvolvedor de Software para Automação de Processos Industriais (Desenvolvimento de Sistemas)"; // Muda o texto de volta
    card2.style.color = "initial"; // Restaura a cor original
});


// Função para passar o mouse para o cardWhite
function funçãoPassarMouseWhite() {
    const card2 = document.getElementById("cardWhite");
    card2.innerHTML = "O Técnico em Manutenção Industrial é responsável pela instalação, manutenção e conserto de máquinas e equipamentos industriais. Ele garante que o maquinário funcione de forma eficiente e segura. Na indústria química, muitos processos envolvem o uso de maquinários complexos, como misturadores, reatores e tubulações, que precisam de manutenção constante para evitar contaminações ou falhas no processo produtivo."; // Muda o texto
    card2.style.color = "black"; // Muda a cor do texto para branco
}

// Adiciona o evento mouseenter
document.getElementById("cardWhite").addEventListener("mouseenter", funçãoPassarMouseWhite);

// Se você quiser reverter ao passar o mouse para fora
document.getElementById("cardWhite").addEventListener("mouseleave", function() {
    const card2 = document.getElementById("cardWhite");
    card2.innerHTML = "Técnico em Manutenção Industrial (Mecânica)"; // Muda o texto de volta
    card2.style.color = "initial"; // Restaura a cor original
});


// Função para passar o mouse para o cardRed
function funçãoPassarMouseRed() {
    const card3 = document.getElementById("cardRed");
    card3.innerHTML = "Este profissional realiza a instalação, manutenção e reparo de sistemas eletroeletrônicos, garantindo que máquinas e equipamentos funcionem corretamente. Em indústrias químicas, muitos processos dependem de equipamentos eletrônicos para monitoramento de temperatura, pressão e outros parâmetros, essenciais para garantir a segurança e qualidade da produção."; // Muda o texto
    card3.style.color = "black"; // Muda a cor do texto para branco
}

// Adiciona o evento mouseenter
document.getElementById("cardRed").addEventListener("mouseenter", funçãoPassarMouseRed);

// Se você quiser reverter ao passar o mouse para fora
document.getElementById("cardRed").addEventListener("mouseleave", function() {
    const card3 = document.getElementById("cardRed");
    card3.innerHTML = "Técnico em Manutenção de Equipamentos Eletroeletrônicos (Eletroeletrônica)"; // Muda o texto de volta
    card3.style.color = "initial"; // Restaura a cor original
});

// Função para passar o mouse para o cardBlack2
function funçãoPassarMouseBlack2() {
    const card = document.getElementById("cardBlack2");
    card.innerHTML = "O Técnico em Qualidade atua na implementação e controle de processos para garantir que produtos e serviços atendam aos padrões de qualidade exigidos. Eles realizam auditorias, testam produtos e monitoram a conformidade com normas técnicas e regulatórias. Os profissionais dessa área podem atuar em indústrias químicas, alimentícias ou farmacêuticas, onde o controle de qualidade é fundamental para garantir a segurança e a eficácia dos produtos."; // Muda o texto
    card.style.color = "white"; // Muda a cor do texto para branco
}

// Adiciona o evento mouseenter
document.getElementById("cardBlack2").addEventListener("mouseenter", funçãoPassarMouseBlack2);

// Se você quiser reverter ao passar o mouse para fora
document.getElementById("cardBlack2").addEventListener("mouseleave", function() {
    const card = document.getElementById("cardBlack2");
    card.innerHTML = "Técnico em Qualidade (Administração)"; // Muda o texto de volta
    card2.style.color = "initial"; // Restaura a cor original
});

// Função para passar o mouse para o cardWhite
function funçãoPassarMouseWhite2() {
    const card2 = document.getElementById("cardWhite2");
    card2.innerHTML = " O Técnico em Alimentos é responsável por desenvolver e melhorar produtos alimentícios, controlar a qualidade e garantir que os processos de produção sejam seguros e eficientes. A química dos alimentos é fundamental para este campo, já que envolve o entendimento das reações químicas durante o processamento de alimentos, preservação, e controle de contaminantes.";// Muda o texto
    card2.style.color = "black"; // Muda a cor do texto para branco
}

// Adiciona o evento mouseenter
document.getElementById("cardWhite2").addEventListener("mouseenter", funçãoPassarMouseWhite2);

// Se você quiser reverter ao passar o mouse para fora
document.getElementById("cardWhite2").addEventListener("mouseleave", function() {
    const card2 = document.getElementById("cardWhite2");
    card2.innerHTML = "Técnico em Processos de Produção de Alimentos (Alimentos)"; // Muda o texto de volta
    card2.style.color = "initial"; // Restaura a cor original
});
