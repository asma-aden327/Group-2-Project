document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".game-board");
  const statusElement = document.getElementById("status");
  let cardValues = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"];
  let cards = [];
  let firstCard = null;
  let secondCard = null;

  // Shuffle card values
  cardValues.sort(() => 0.5 - Math.random());

  // Create cards
  for (let value of cardValues) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;

    let cardFront = document.createElement("div");
    cardFront.classList.add("card-content", "card-front");

    let cardBack = document.createElement("div");
    cardBack.classList.add("card-content", "card-back");
    cardBack.textContent = value;

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    card.addEventListener("click", onCardClick);
    board.appendChild(card);
    cards.push(card);
  }

 function onCardClick(event) {
    if (firstCard && secondCard) return;
    let clickedCard = event.currentTarget;
    if (clickedCard === firstCard) return;

    clickedCard.classList.add("flipped");

    if (!firstCard) {
      firstCard = clickedCard;
    } else {
      secondCard = clickedCard;
      if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        firstCard = null;
        secondCard = null;
        if (cards.every((card) => card.classList.contains("matched"))) {
          statusElement.textContent = "Congratulations You win!";
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  }
