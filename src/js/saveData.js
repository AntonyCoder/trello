import { Card } from "./components/card/card";

export function saveState(columns){
    state = {
        'todo': Array.from(columns.todo.children).map(card => card.textContent),
        'inProgress': Array.from(columns.todo.children).map(card => card.textContent),
        'done': Array.from(columns.todo.children).map(card => card.textContent),
    }

    localStorage.setItem('appState', JSON.stringify(state));
}

export function loadState(columns){
    const state = JSON.parse(localStorage.getItem('appState'));
    if(!state) return;

    Object.keys(state).forEach(columnKey => {
        const column = columns[columnKey];
        state[columnKey].forEach(text => {
            const card = new Card(text);
            card.renderCard();
            column.appendChild(card);
        })
    })
}