import './column.css'

export class Column {
    constructor() {
        this.cards = [];
    }

    //Отрисовка колонок приложения
    renderColumn(titleName) {
        //Создаем контейнер для колонки приложения
        const columnContainer = document.createElement('div');
        columnContainer.classList.add('column-container');

        //Создаем название колонки
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = titleName;

        //Создаем обертку для будущих карточек в колонке
        const cardsWrapper = document.createElement('div');
        cardsWrapper.classList.add('cards-wrapper');

        //Создаем кнопку для добавления новых карточек
        const addCardButton = document.createElement('a');
        addCardButton.classList.add('addcard-button');
        addCardButton.textContent = '+ Add another card';

        columnContainer.appendChild(title);
        columnContainer.appendChild(cardsWrapper);
        columnContainer.appendChild(addCardButton);

        return columnContainer;
    }
}