import './card.css'

export class Card {
    constructor(text) {
        this.text = text
    }

    renderCard() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = this.text;
        

    }
}