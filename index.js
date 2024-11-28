const checkbox = document.getElementById('superDutchMode');
checkbox.checked = true;
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.classList.add('super-dutch-mode');
    } else {
        document.body.classList.remove('super-dutch-mode');
    }
});

const quizData = {
    "words": [
        ["kat", "cat", "de"],
        ["appel", "apple", "de"],
        ["huis", "house", "het"]
    ]
};

const quizContainer = document.getElementById('quizContainer');

function makeQuiz(data) {
    const allChoices = ["de", "het"];
    data.words.forEach((wordSet, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = "question";

        const questionText = document.createElement('h3');
        questionText.textContent = `What is the article for "${wordSet[0]}"?`;
        questionDiv.appendChild(questionText);

        allChoices.forEach((choice) => {
            const label = document.createElement('label');
            const input = document.createElement('input');

            input.type = "radio";
            input.name = `question${index}`;
            input.value = choice;

            label.appendChild(input);
            label.appendChild(document.createTextNode(choice));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });
}

makeQuiz(quizData);

document.getElementById('submitQuiz').addEventListener('click', () => {
    let correctAnswers = 0;
    let answers = [];
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, _index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            answers.push(selectedOption.value);
        }
    });

    answers.forEach((answer, index) => {
        if (answer == quizData.words[index][2]) {
            correctAnswers += 1;
        }
    });

    const main = document.getElementById('main');
    const scoreText = document.createElement('p');
    scoreText.textContent = "Score: " + correctAnswers.toString() + "/" + quizData["words"].length.toString();
    main.appendChild(scoreText);
});