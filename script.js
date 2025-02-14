// Variables du jeu
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Fonction pour vérifier la réponse
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Entrez un nombre!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Bravo! Vous avez trouvé!';
        document.body.style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Trop haut!' : '📉 Trop bas!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 Vous avez perdu!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Réinitialiser le jeu
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Commencez à deviner...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
});
