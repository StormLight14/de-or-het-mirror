const quizData = {
    "words": [
        ["kat", "cat", "de"],
        ["appel", "apple", "de"],
        ["huis", "house", "het"]
    ]
};

const quizContainer = document.getElementById('quizContainer')

const checkbox = document.getElementById('superDutchMode');
checkbox.checked = true;
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.classList.add('super-dutch-mode');
    } else {
        document.body.classList.remove('super-dutch-mode');
    }
});