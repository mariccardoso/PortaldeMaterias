document.getElementById('submit').addEventListener('click', function() {
    const questions = document.querySelectorAll('.question');
    let totalCorrect = 0;


    questions.forEach(question => {
        const options = question.querySelectorAll('.option');
        let selectedAnswer = null;


        options.forEach(option => {
            if (option.querySelector('input').checked) {
                selectedAnswer = option;
            }
        });


        const correctIndex = question.dataset.correct;


        options.forEach(option => {
            option.classList.remove('correct', 'wrong');
            const isCorrect = option.querySelector('input').value == correctIndex;
            if (option === selectedAnswer) {
                if (isCorrect) {
                    option.classList.add('correct');
                    totalCorrect++;
                } else {
                    option.classList.add('wrong');
                }
            } else if (isCorrect) {
                option.classList.add('correct');
            }
        });
    });


    document.getElementById('result').innerText = `Você acertou ${totalCorrect} de ${questions.length} perguntas.`;
});