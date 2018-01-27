import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Menu from './components/menu/menu';
import Route from './container/route';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
