import './card.css'

export class Card {
    constructor(text, column) {
        this.text = text;
        this.column = column;
        this.removeCard = this.removeCard.bind(this)
    }
    //Отрисовка новой карточки
    renderCard() {
        const card = document.createElement('pre');
        card.classList.add('card');
        card.textContent = this.text;

        const removeButton = document.createElement('a');
        removeButton.classList.add('remove-button');
        removeButton.textContent = '✖';

        card.appendChild(removeButton);

        removeButton.addEventListener('click', this.removeCard);

        return card;
    }

    removeCard(e) {
        const card = e.target.closest('pre');
        card.remove();
        this.column.removeCard(this);
    }
}