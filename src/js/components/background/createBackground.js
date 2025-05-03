import './createBackground.css'

export default function createBackground(actualCard, e) {
    const background = document.createElement('div');
    background.classList.add('background');
    background.style.height = actualCard.height;

    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    const targetWrapper = dropTarget.closest('.cards-wrapper');
    const targetColumn = dropTarget.closest('.column-container');

}