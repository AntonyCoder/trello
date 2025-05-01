import './addNewCardBlock.css'
import { Card } from '../card/card';

export default class AddNewCardBlock {
    constructor() {
        this.onCancelButton = this.onCancelButton.bind(this);
        this.onAddCardConfirmButton = this.onAddCardConfirmButton.bind(this);
    }
    // Отрисовка блока добавления новой карточки
    renderBlock() {
        //Обертка для блока добавления новой карточки
        const addCardWrapper = document.createElement('div');
        addCardWrapper.classList.add('add-card-wrapper');

        //Текстовое поле для ввода текста новой карточки
        const textInputField = document.createElement('textarea');
        textInputField.placeholder = 'Enter a title for this card...';
        textInputField.classList.add('title-input-field');

        //Кнопка подтверждения добавления карточки 
        const addCardConfirmButton = document.createElement('a');
        addCardConfirmButton.classList.add('add-card-confirm-button');
        addCardConfirmButton.textContent = 'Add card';

        //Кнопка отмены добавления карточки
        const cancelButton = document.createElement('a');
        cancelButton.classList.add('cancel-button');
        cancelButton.textContent = '✖';

        addCardWrapper.append(textInputField, addCardConfirmButton, cancelButton);

        cancelButton.addEventListener('click', this.onCancelButton);

        addCardConfirmButton.addEventListener('click', this.onAddCardConfirmButton)

        return addCardWrapper;
    }

    // Кнопка закрытия блока добавления новой карточки 
    onCancelButton(e) {
        const addCardWrapper = e.target.closest('.add-card-wrapper')
        const columnContainer = e.target.closest('.column-container');
        addCardWrapper.remove();

        const addCardButton = columnContainer.querySelector('.addcard-button');
        addCardButton.style.display = 'block';
    }

    //Нажатие на кнопку добавления новой карточки
    onAddCardConfirmButton(e) {
        const textInputField = e.target.previousElementSibling.value.trim();
        if (!textInputField) return;

        const card = new Card(textInputField);
        const newCard = card.renderCard();

        const cardsWrapper = e.target.closest('.add-card-wrapper').previousElementSibling;

        cardsWrapper.appendChild(newCard);

        this.onCancelButton(e);
    }

}