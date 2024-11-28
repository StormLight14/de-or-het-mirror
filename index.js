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
    "questionCount": 5,
    "words": [
        ["kat", "cat", "de"],
        ["appel", "apple", "de"],
        ["huis", "house", "het"],
        ["hond", "dog", "de"],
        ["kamer", "room", "de"],
        ["snertweer", "awful weather", "het"],
        ["flodder", "mess", "de"],
        ["prutswerk", "crappy job", "het"],
        ["rommelkont", "messy person", "de"],
        ["neushoorn", "rhino", "de"],
        ["hart", "heart", "het"],
        ["water", "water", "het"],
        ["straat", "street", "de"],
        ["auto", "car", "de"],
        ["strand", "beach", "het"],
        ["vrouw", "woman", "de"],
        ["muis", "mouse", "de"],
        ["banaan", "banana", "de"],
    ]
};

const quizContainer = document.getElementById('quizContainer');

function makeQuiz(data) {
    // shuffle, thanks Laurens Holst & Luca C. on stack overflow :3
    for (let i = quizData.words.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData.words[i], quizData.words[j]] = [quizData.words[j], quizData.words[i]];
    }

    const allChoices = ["de", "het"];
    data.words.forEach((wordSet, index) => {
        if (index >= quizData.questionCount) {
            return;
        }
        const questionDiv = document.createElement('div');
        questionDiv.className = "question";

        const questionText = document.createElement('h3');
        questionText.textContent = `What is the article for "${wordSet[0]}" (${wordSet[1]})?`;
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
    const score = document.getElementById('score');
    score.textContent = "Score: " + correctAnswers.toString() + "/" + quizData.questionCount.toString();
    main.appendChild(scoreText);
});