const usernameSpan = document.querySelector('#username');
const username = localStorage.getItem('username');
usernameSpan.textContent = username;

// Game logic
const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
let clickedCards = [];
let matchedCards = [];

function startGame() {
  clickedCards = [];
  matchedCards = [];
  shuffleCards();
  createBoard();
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function createBoard() {
  const gameBoard = document.querySelector('#game-board');
  gameBoard.innerHTML = '';
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.cardIndex = i;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  }
}

function flipCard() {
    if (clickedCards.length < 2 && !matchedCards.includes(this.dataset.cardIndex)) {
        clickedCards.push(this.dataset.cardIndex);
        this.textContent = cards[this.dataset.cardIndex];
        this.classList.add('clicked');

        if (clickedCards.length=== 2) {
            const cardIndex1 = clickedCards[0];
            const cardIndex2 = clickedCards[1];
            if (cards[cardIndex1] === cards[cardIndex2]) {
                matchedCards.push(cardIndex1, cardIndex2);
            } else {
                setTimeout(() => {
                    const card1 = document.querySelector(`[data-card-index="${cardIndex1}"]`);
                    const card2 = document.querySelector(`[data-card-index="${cardIndex2}"]`);
                    card1.textContent = '';
                    card2.textContent = '';
                    card1.classList.remove('clicked');
                    card2.classList.remove('clicked');
                }, 1000);
            }
            clickedCards = [];
            checkWin();
        }
    }
}

function checkWin() {
    if (matchedCards.length === cards.length) {
        setTimeout(() => {
            alert('Congratulations! ' + username +' won the game!');
            startGame();
        }, 1000);
    }
}

// Start the game when the Start Game button is clicked
document.querySelector('#start-btn').addEventListener('click', startGame);

// Reset the game when the Reset Game button is clicked
document.querySelector('#reset-btn').addEventListener('click', startGame);