export default function insertCard(actualCard, e, parentElement, nextSibling) {
    actualCard.style.display = 'none';

    let dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    if (dropTarget.classList.contains('cards-wrapper')) {
        dropTarget = document.elementFromPoint(e.clientX, e.clientY + 15);
    }
    actualCard.style.display = '';

    let targetWrapper = dropTarget.closest('.cards-wrapper');
    const targetColumn = dropTarget.closest('.column-container');

    const dropTargetRect = dropTarget.getBoundingClientRect();
    let middleDropTarget = dropTargetRect.top + dropTargetRect.height / 2;

    if (targetColumn && !targetWrapper) {
        targetWrapper = targetColumn.querySelector('.cards-wrapper');
        targetWrapper.appendChild(actualCard);
    } else if (targetColumn && targetWrapper) {
        if (middleDropTarget < e.clientY) {
            targetWrapper.insertBefore(actualCard, dropTarget.nextSibling);
        } else {
            targetWrapper.insertBefore(actualCard, dropTarget);
        }
    } else {
        parentElement.insertBefore(actualCard, nextSibling);
    }
}