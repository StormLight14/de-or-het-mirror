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
    data.words.forEach((wordSet, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = "question";
    });
    
    const questionText = document.createElement('h3');
    questionText.textContent = `Is "${wordSet[0]}" a "de" or "het" word?`;
    questionDiv.appendChild(questionText);

    const main = document.getElementById('main');
    main.appendChild(questionDiv);
}

makeQuiz(quizData);