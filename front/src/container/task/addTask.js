import React, { Component } from 'react';
import axios from 'axios';
import './task.css';

class addTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', 
            content: ''
        };
        this.createTaskHandler = this.createTaskHandler.bind(this);
    }
    

    changeHandler = (event) => {
        this.setState({
            title: event.target.value,
            content: event.target.value
        });
    }

    createTaskHandler = (event) => {
        const task = {
            title: this.state.title,
            content: this.state.content,
        };
        axios.post('/tasks', task)
        .then((response) => {
            console.log(response);
            document.getElementById("form").reset();
        })
        .catch((error) => {
            console.log(error)
        });
        event.preventDefault();
    }

    render() {
        return (
            <form className="add-task" onSubmit={this.createTaskHandler} id="form">
                <input type="text" title={this.state.title} onChange={this.changeHandler} placeholder="Tâche" />
                <textarea content={this.state.content} onChange={this.changeHandler} ></textarea>
                <input className="submit" type='submit' value="ajouer"/>
            </form>
        );
    }
}
export default addTask;