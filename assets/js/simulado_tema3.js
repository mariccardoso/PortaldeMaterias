document.getElementById('submit').addEventListener('click', function() {
    const questions = document.querySelectorAll('.question');
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="answer${index + 1}"]:checked`);
        const options = question.querySelectorAll('label');

        // Verifica se uma opção foi selecionada
        if (selectedOption) {
            options.forEach(option => {
                const input = option.querySelector('input');
                
                // Se a resposta estiver correta (value="1")
                if (input.value === "1") {
                    option.classList.add('correct'); // Adiciona cor verde
                } else {
                    option.classList.remove('correct');
                }

                // Se o usuário escolheu a opção errada
                if (input.checked && input.value === "0") {
                    option.classList.add('wrong'); // Adiciona cor vermelha para a errada selecionada
                } else {
                    option.classList.remove('wrong');
                }
            });

            // Conta se a resposta selecionada foi correta
            if (selectedOption.value === "1") {
                correctAnswers++;
            }
        }
    });

    const totalQuestions = questions.length;
    const result = document.getElementById('result');
    result.textContent = `Você acertou ${correctAnswers} de ${totalQuestions} questões.`;
});