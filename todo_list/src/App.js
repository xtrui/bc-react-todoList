import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/TodoListContainner'
import TodoFormContainer from './components/TodoFormContainer'
import Switch from 'react-router'
import {BrowserRouter,Link} from "react-router-dom";

function App() {
    return <BrowserRouter><div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>TodoList</h2>
                <TodoListContainer/>
                <TodoFormContainer/>
                <Link to={'/done'}>about</Link>
                <Link to={'/todo'}>about</Link>
            </header>
        </div>
    </BrowserRouter>;
}

export default App;
