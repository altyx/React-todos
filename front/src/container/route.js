import React, { Component} from 'react';
import { Route } from 'react-router-dom';

import addTask from '../container/task/addTask';
import Login from '../components/user/login';
import Home from '../components/home/home';
import Tasks from '../container/task/tasks';
import Signin from '../components/user/signin';

class route extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/add' component={addTask} />
                <Route path='/tasks' component={Tasks} />
                <Route path='/signin' component={Signin} />
            </div>
        );
    }
}

export default route;