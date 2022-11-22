const TODO_STORED_KEY = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORED_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODO_STORED_KEY, JSON.stringify(todos))
    }
}