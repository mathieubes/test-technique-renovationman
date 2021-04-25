import React, { Component } from 'react'

import styles from './Todo.module.css'

import trash from '../assets/trash.svg'

class Todo extends Component {

    constructor() {
        super()
        this.state = {
            isDeleted: false
        }
    }

    removeTodo = () => {
        this.setState({ isDeleted: true })

        setTimeout(() => {
            this.setState({ isDeleted: false })
            this.props.removeTodo(this.props.id, this.props.storageId)
        }, 500)
    }
    
    render() {
        return (
            <div className={ styles.postIt } style={{ opacity: this.state.isDeleted ? 0 : 1 }}>
                <div className={ styles.content }>
                    <div className={ styles.head }>
                        <h3 className={ styles.title }>{ this.props.title }</h3>
                        <img className={ styles.trashButton }
                            src={ trash }
                            alt="Red trash can"
                            onClick={this.removeTodo}
                            />
                    </div>
                    <p className={ styles.text }>{ this.props.text }</p>
                    <div className={ styles.createdAt}>Créé le { this.props.createdAt }</div>
                </div>
            </div>
        )
    }

}

export default Todo