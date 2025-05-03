import insertCard from "./insertCard";
import { save } from "./storage";

export default function dragAndDrop() {
    const container = document.querySelector('.container');
    let actualCard = null;
    let offsetY = 0;
    let offsetX = 0;
    let parentElement;
    let nextSibling;


    //События при нажимании мыши на карточку
    const onMouseDown = (e) => {
        if (!e.target.classList.contains('card')) return; //Если не карточка то ничего не делаем
        e.preventDefault();
        actualCard = e.target;

        parentElement = actualCard.parentElement;
        nextSibling = actualCard.nextSibling;

        const rect = actualCard.getBoundingClientRect(); // Расстояние от угла элемента до края экрана
        //Положение курсора относительно угла карточки
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        actualCard.style.width = `${rect.width}px`; //фиксируем ширину карточки

        actualCard.classList.add('dragging');

        document.documentElement.addEventListener('mousemove', onMouseMove);
        document.documentElement.addEventListener('mouseup', onMouseUp);

    }

    //События при движении мыши
    const onMouseMove = (e) => {
        actualCard.style.position = 'absolute';
        document.body.appendChild(actualCard);
        actualCard.style.top = e.clientY - offsetY + 'px';
        actualCard.style.left = e.clientX - offsetX + 'px';
    }

    //События при отпускании мыши
    const onMouseUp = (e) => {
    
        insertCard(actualCard, e, parentElement, nextSibling);

        document.documentElement.removeEventListener('mousemove', onMouseMove);
        document.documentElement.removeEventListener('mouseup', onMouseUp);
        actualCard.classList.remove('dragging');

        actualCard.style = ''; //Сбросим стили

        saveState();
    }

    //Сохраняем состояние после перемещения карточки
    const saveState = () => {
        const columns = document.querySelectorAll('.cards-wrapper');
        const state = {};

        columns.forEach(column => {
            const title = column.id;
            const cards = Array.from(column.querySelectorAll('.card')).map(card => {
                return Array.from(card.childNodes)
                    .filter(node => node.nodeType === Node.TEXT_NODE)
                    .map(node => node.textContent.trim())
                    .join('');
            });
            state[title] = cards;
        });

        save(state);
    }

    container.addEventListener('mousedown', onMouseDown);
}
