import insertCard from '../../insertCard';
import './createBackground.css'

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
// actualCard.style.display = 'none';

// let dropTarget = document.elementFromPoint(e.clientX, e.clientY);
// if (dropTarget.classList.contains('cards-wrapper')) {
//     dropTarget = document.elementFromPoint(e.clientX, e.clientY + 15);
// }
// actualCard.style.display = '';

// let targetWrapper = dropTarget.closest('.cards-wrapper');
// const targetColumn = dropTarget.closest('.column-container');

// const dropTargetRect = dropTarget.getBoundingClientRect();
// let middleDropTarget = dropTargetRect.top + dropTargetRect.height / 2;

// if (targetColumn && !targetWrapper) {
//     targetWrapper = targetColumn.querySelector('.cards-wrapper');
//     targetWrapper.appendChild(background);
// } else if (targetColumn && targetWrapper) {
//     if (middleDropTarget < e.clientY) {
//         targetWrapper.insertBefore(background, dropTarget.nextSibling);
//     } else {
//         targetWrapper.insertBefore(background, dropTarget);
//     }
// } else {
//     parentElement.insertBefore(background, nextSibling);
// }