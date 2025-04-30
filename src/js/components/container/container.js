import './container.css'
import { Column } from '../column/column';

export class MainContainer {

    renderContainer(){
        const container = document.createElement('div');
        container.classList.add('container');

        document.body.appendChild(container);
        const column = new Column();
        const todo = column.renderColumn('TODO');
        const inProgress = column.renderColumn('IN PROGRESS');
        const done = column.renderColumn('DONE');

        container.append(todo, inProgress, done);

    }
}