export default function insertCard(actualCard, e, parentElement, nextSibling) {
    
    const isBackground = actualCard.classList.contains('background');
    if (!isBackground) {
        e.target.style.display = 'none';
    }

    let dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    if (!dropTarget) return;

    if (dropTarget.classList.contains('cards-wrapper')) {
        dropTarget = document.elementFromPoint(e.clientX, e.clientY + 15);
    }


    let targetWrapper = dropTarget.closest('.cards-wrapper');
    const targetColumn = dropTarget.closest('.column-container');

    if (!targetColumn) {
        parentElement.insertBefore(actualCard, nextSibling);
        return;
    }

    if (!targetWrapper) {
        targetWrapper = targetColumn.querySelector('.cards-wrapper');
        targetWrapper.appendChild(actualCard);
        return;
    }

    const dropTargetRect = dropTarget.getBoundingClientRect();
    let middleDropTarget = dropTargetRect.top + dropTargetRect.height / 2;

    if (dropTarget !== actualCard && dropTarget !== null) {
        if (e.clientY > middleDropTarget) {
            targetWrapper.insertBefore(actualCard, dropTarget.nextSibling);
        } else {
            targetWrapper.insertBefore(actualCard, dropTarget);
        }
    }
}