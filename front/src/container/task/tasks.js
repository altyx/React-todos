import React, { Component} from 'react';
import axios from 'axios';

import Task from '../../components/tasks/task';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount = () => {
        
        axios.get('/tasks')
            .then((response) => {                
                this.setState({ tasks: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        
        let tasks = (
            <div className="container">
               {
                    this.state.tasks.map(task => {
                        return <Task title={task.title} content={task.content} key={task._id} />
                    }) 
                }
            </div>
        );
        return (
            <div>
                {tasks}
            </div>
        );
    };
}

export default Tasks;