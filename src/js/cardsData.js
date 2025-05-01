import { loadState } from "./saveData"

document.addEventListener('DOMContentLoaded', () => {
    const columns = {
        'todo': document.getElementById('TODO'),
        'inProgress': document.getElementById('IN PROGRESS'),
        'done': document.getElementById('DONE'),
    }

    loadState(columns)
})