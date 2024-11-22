function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let incorrect = 0;
  
    questions.forEach(question => {
      const correctAnswer = question.dataset.correct;
      const options = question.querySelectorAll('input[type="radio"]');
      const feedback = question.querySelector('.feedback');
      const explanation = question.querySelector('.explanation');
  
      let selected = null;
  
      // Verifica qual resposta foi selecionada
      options.forEach(option => {
        const label = option.parentElement;
        label.classList.remove('correct-answer', 'incorrect-answer'); // Reseta estilos anteriores
        if (option.checked) {
          selected = option.value;
        }
      });
  
      if (selected) {
        if (selected === correctAnswer) {
          feedback.textContent = 'Correto!';
          feedback.className = 'feedback correct';
          score++;
        } else {
          feedback.textContent = 'Incorreto.';
          feedback.className = 'feedback incorrect';
          incorrect++;
        }
      } else {
        feedback.textContent = 'Você não selecionou uma resposta.';
        feedback.className = 'feedback incorrect';
        incorrect++;
      }
  
      // Aplica estilos às respostas
      options.forEach(option => {
        const label = option.parentElement;
        if (option.value === correctAnswer) {
          label.classList.add('correct-answer');
        } else if (option.checked) {
          label.classList.add('incorrect-answer');
        }
      });
  
      // Exibe a explicação
      explanation.style.display = 'block';
    });
  
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
  
    document.querySelector('.score').textContent = 
      `Você acertou ${score} de ${totalQuestions} questões (${percentage}%).`;
  
    // Atualizar gráficos
    updateCharts(score, incorrect);
  
    // Exibir feedback de desempenho
    const feedbackElement = document.querySelector('.performance-feedback');
    if (percentage >= 90) {
      feedbackElement.textContent = 'Excelente trabalho! Você domina os conteúdos e está no caminho certo para alcançar seus objetivos.';
      feedbackElement.className = 'performance-feedback excellent';
    } else if (percentage >= 70) {
      feedbackElement.textContent = 'Parabéns! Seu desempenho mostra um bom domínio dos conteúdos, mas ainda há pequenos ajustes que podem te levar à excelência.';
      feedbackElement.className = 'performance-feedback good';
    } else if (percentage >= 40) {
      feedbackElement.textContent = 'Você já possui uma base sólida, mas ainda há espaço para evolução. Alguns conceitos podem estar confusos ou incompletos.';
      feedbackElement.className = 'performance-feedback average';
    } else {
      feedbackElement.textContent = 'Você está no começo da jornada e tem muito espaço para crescer! Seu resultado mostra que é importante revisar os conceitos básicos e fortalecer os fundamentos.';
      feedbackElement.className = 'performance-feedback poor';
    }
  }
  
  function updateCharts(correct, incorrect) {
    const insightsSection = document.getElementById('insights');
    insightsSection.style.display = 'block';
  
    // Dados para os gráficos
    const dataPie = {
      labels: ['Corretas', 'Incorretas'],
      datasets: [{
        data: [correct, incorrect],
        backgroundColor: ['#4CAF50', '#FF6F61']
      }]
    };
  
    // Atualizar gráfico de Pizza
    const pieChartElement = document.getElementById('resultsPie');
    
    // Destroi gráfico existente antes de criar um novo
    if (window.pieChart) {
      window.pieChart.destroy();
    }
  
    window.pieChart = new Chart(pieChartElement, {
      type: 'doughnut',
      data: dataPie,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        cutout: '50%', // Torna o gráfico estilo donut
      }
    });
  }
  
  