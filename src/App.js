import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux';

//initial state
const initialState = 0;

//reducer (how state changes)
const countReducer = (state=initialState, action) => {
  console.log('action');
  return 7;
};

//creation of the store
const store = createStore(countReducer);
debugger;

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
        
      </div>
    );
  }
}

export default App;
