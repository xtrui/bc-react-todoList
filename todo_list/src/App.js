import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoFormContainer from './components/TodoFormContainer'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>TodoList</h2>
                <TodoList/>
                <TodoFormContainer/>
            </header>
        </div>
    );
}

export default App;
