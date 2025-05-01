import './column.css'
import AddNewCardBlock from '../addNewCardBlock/addNewCardBlock';

export class Column {
    constructor() {
        // this.cards = localStorage.getItem(cards);
        this.openNewCardBlock = this.openNewCardBlock.bind(this);
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
        cardsWrapper.id = titleName

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
        const addNewCardBlock = new AddNewCardBlock();
        const newCardBlock = addNewCardBlock.renderBlock();

        const columnContainer = e.target.closest('div');
        const addCardButton = columnContainer.querySelector('.addcard-button');
        columnContainer.insertBefore(newCardBlock, addCardButton);
        addCardButton.style.display = 'none';
    }
}