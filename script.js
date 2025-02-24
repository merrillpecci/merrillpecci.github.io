const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

function flipCard() {
    this.classList.toggle("flipCard");
}


/* CITE MORE SPECIFICALLY */

/*Values Page - Card Flipping Mechanics (Using Javascript)
        https://www.youtube.com/watch?v=OV8MVmtgmoY
        https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c#:~:text=Firstly%2C%20in%20your%20JS%20index,which%20toggles%20on%20a%20click.

Changes I made to this:
- removed class ID because when adding the grid of cards, multiple elements shared the "ID", resulting in an error.
- changed it so a class is used to identify cards, that way this mechanic applies to all cards in the grid