import React, { Component } from 'react';
import axios from 'axios';

class addTask extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.createTaskHandler = this.createTaskHandler.bind(this);
    }
    

    changeHandler = (event) => {
        this.setState({value: event.target.value});
    }

    createTaskHandler = (event) => {
        //request here
        axios.post('http://localhost:4000/tasks', {
            title: this.state.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        });

        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.createTaskHandler}>
                <input type="text" value={this.state.value} onChange={this.changeHandler} placeholder="Tâche" />
                <input type='submit' value="ajouer"/>
            </form>
        );
    }
}
export default addTask;