import React, { Component } from 'react'

import styles from './TodoList.module.css'

import DateHelper from '../utils/DateHelper'
import TodosRequest from '../dataAccess/TodosRequest'

import Todo from './Todo'
import NewTodo from './NewTodo'

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
            todos: TodosRequest.getTodos()
        }
    }

    addTodo = (title, text) => {
        const { todos } = this.state

        // Checking for new id. If there's no Todos then the id is 0
        const newId = todos.length === 0 ? 0 : todos[todos.length-1].id + 1
        
        const todo = { id: newId, timestamp: Date.now(), title: title, text: text }
        
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))

        TodosRequest.addTodo(todo)
    }

    removeTodo = (id, storageId) => {
        console.log(id)

        const todosCopy = [...this.state.todos]
        todosCopy.splice(id, 1)
        this.setState({
            todos: todosCopy
        })

        TodosRequest.removeTodo(storageId)
    }

    render() {
        const { todos } = this.state

        return (
            <div className={ styles.grid }>
                {
                    todos.map((todo, i) => {
                        return (
                            <Todo
                                key={i}
                                id={i}
                                storageId={todo.id}
                                createdAt={DateHelper.getReadableDateFromTimestamp(todo.timestamp)}
                                title={todo.title}
                                text={todo.text}
                                removeTodo={this.removeTodo}
                                />
                        )
                    })
                }
                
                <NewTodo addTodo={this.addTodo}/>
            </div>
        )
    }

}

export default TodoList