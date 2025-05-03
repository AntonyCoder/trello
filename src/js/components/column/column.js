import './column.css'
import AddNewCardBlock from '../addNewCardBlock/addNewCardBlock';
import { Card } from '../card/card';
import { load, save } from '../../storage';

export class Column {
    constructor(title) {
        this.title = title;
        this.cards = [];
        this.cardsWrapper = null
        this.openNewCardBlock = this.openNewCardBlock.bind(this);
    }

    //Отрисовка колонок приложения
    renderColumn() {
        //Создаем контейнер для колонки приложения
        const columnContainer = document.createElement('div');
        columnContainer.classList.add('column-container');

        //Создаем название колонки
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = this.title;

        //Создаем обертку для будущих карточек в колонке
        const cardsWrapper = document.createElement('div');
        cardsWrapper.classList.add('cards-wrapper');
        cardsWrapper.id = this.title;
        this.cardsWrapper = cardsWrapper;

        //Создаем кнопку для добавления новых карточек
        const addCardButton = document.createElement('a');
        addCardButton.classList.add('addcard-button');
        addCardButton.textContent = '+ Add another card';

        columnContainer.appendChild(title);
        columnContainer.appendChild(cardsWrapper);
        columnContainer.appendChild(addCardButton);

        //Обработчик события клика по кнопке добавления новой карточки
        addCardButton.addEventListener('click', this.openNewCardBlock);

        return columnContainer;
    }

    //Открытие блока для добавления новой карточки 
    openNewCardBlock(e) {
        const addNewCardBlock = new AddNewCardBlock(this);
        const newCardBlock = addNewCardBlock.renderBlock();

        const columnContainer = e.target.closest('div');
        const addCardButton = columnContainer.querySelector('.addcard-button');
        columnContainer.insertBefore(newCardBlock, addCardButton);
        addCardButton.style.display = 'none';
    }

    addCard(text) {
        const card = new Card(text, this);
        const cardEl = card.renderCard();
        this.cards.push(card);
        this.cardsWrapper.appendChild(cardEl);
        this.saveToStorage();
    }

    removeCard(cardInstance) {
        this.cards = this.cards.filter(c => c !== cardInstance);
        this.saveToStorage();
    }

    saveToStorage() {
        const currentState = load();
        currentState[this.title] = this.cards.map(c => c.text);
        save(currentState);
    }
}