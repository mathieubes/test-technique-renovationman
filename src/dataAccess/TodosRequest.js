class TodosRequest {

    static getTodos() {
        let todos = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const todo = JSON.parse(localStorage.getItem(key))
            todos.push(todo)
        }

        todos.sort((a, b) => {
            return a.id - b.id
        })
        console.log(todos)

        return todos
    }

    static addTodo(todo) {
        localStorage.setItem(todo.id, JSON.stringify(todo))
    }

    static removeTodo(id) {
        localStorage.removeItem(id)
    }

}

export default TodosRequest