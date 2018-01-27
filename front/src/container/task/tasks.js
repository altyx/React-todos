import React, { Component} from 'react';
import axios from 'axios';

import Task from '../../components/tasks/task';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount = () => {
        
        axios.get('http://localhost:4000/tasks')
            .then((response) => {                
                this.setState({ tasks: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        
        let tasks = (
            <div>
               {
                    this.state.tasks.map(task => {
                        return <Task title={task.title} key={task._id} />
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