import React, { Component } from 'react'

import styles from './NewTodo.module.css'
import { postIt } from './Todo.module.css'

import plusCircle from '../assets/plus-circle.svg'
import checkCircle from '../assets/check-circle.svg'

class NewTodo extends Component {

    constructor() {
        super()
        this.state = {
            isSelected: false, // Debugging
            title: '',
            text: '',
            hasError: false,
            isValid: false
        }
    }

    selectPostIt = () => {
        this.setState({ isSelected: true })
    }

    handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        })
    }

    addTodo = event => {
        event.preventDefault()

        const { title, text } = this.state
        
        if (title.length === 0 || text.length === 0) {
            this.setState({ hasError: true })
        } else {
            this.setState({ 
                hasError: false,
                isValid: true
            })

            setTimeout(() => {
                this.props.addTodo(title, text)
        
                this.resetToPlaceholder()
            }, 1000)
        }
    }

    resetToPlaceholder = () => {
        this.setState({
            isSelected: false,
            title: '',
            text: '',
            hasError: false,
            isValid: false
        })
    }
    render() {
        if (!this.state.isSelected)
            return <this.UnselectedPostIt />
        else
            return <this.SelectedPostIt />
        
    }

    UnselectedPostIt = () => {
        return (
            <div className={ styles.placeholder } onClick={this.selectPostIt}>
                <div className={ styles.placeholderFlex }>
                    <img src={ plusCircle } alt="Add a new Todo icon" />
                    <p>Ajouter un composant carte</p>
                </div>
            </div>
        )
    }

    SelectedPostIt = () => {
        return (
            <div className={ postIt }>
                <form className={ styles.editingFlex } onSubmit={this.addTodo}>
                    <input 
                        type="text"
                        name="title" 
                        style={{ borderColor: this.state.hasError ? 'red' : 'var(--grey' }}
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Composant Carte ..."
                        />

                    <input
                        type="text"
                        name="text"
                        style={{ borderColor: this.state.hasError ? 'red' : 'var(--grey' }}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        placeholder="Entrez votre texte ici"
                        />

                    <input type="submit" className={ styles.btn } value="Ajouter la carte" />

                    <img 
                        className={styles.checkIcon}
                        style={{ opacity: this.state.isValid ? 1: 0}}
                        src={checkCircle}
                        alt="Check circle if the form is correct"
                        />
                </form>
            </div>
        )
    }

}

export default NewTodo