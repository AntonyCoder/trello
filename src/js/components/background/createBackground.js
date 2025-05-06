import insertCard from '../../insertCard';
import './createBackground.css';
//Создание фона при перетаскивании карточки 
export default function createBackground(actualCard, e, parentElement, nextSibling) {

    const oldBackground = document.querySelector('.background');
    if(oldBackground) oldBackground.remove();

    const background = document.createElement('div');
    background.classList.add('background');
    const height = actualCard.getBoundingClientRect().height;
    background.style.height = height + 'px';

    actualCard.style.display = 'none';
    insertCard(background, e, parentElement, nextSibling);
    actualCard.style.display = '';
}