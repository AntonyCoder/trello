const STORAGE_KEY = 'appState';

export function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function load() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
}