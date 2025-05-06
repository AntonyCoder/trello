import './container.css'
import { Column } from '../column/column';
import { load } from '../../storage';

export class MainContainer {
    //отрисовка контейнера с колонками
    renderContainer() {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        const savedState = load();

        const titles = ['TODO', 'IN PROGRESS', 'DONE'];
        window.columnsRef = {};

        titles.forEach(title => {
            const column = new Column(title);
            const colElem = column.renderColumn();
            container.appendChild(colElem);

            window.columnsRef[title] = column;

            if (savedState[title]) {
                savedState[title].forEach(cardText => column.addCard(cardText));
            }
        })
    }
}