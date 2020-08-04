import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/TodoListContainner'
import TodoFormContainer from './components/TodoFormContainer'
import Switch from 'react-router'
import {BrowserRouter,Link,Route} from "react-router-dom";

function App() {
    return <BrowserRouter><div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>TodoList</h2>
                <Route exact path="/" component={TodoListContainer} />
                <Route exact path="/" component={TodoFormContainer} />
                <Route path="/done" component={TodoListContainer} />
                <Route path="/todo" component={TodoListContainer} />
                {/*<TodoFormContainer/>*/}
                <Link to={'/done'}>done</Link>
                <Link to={'/todo'}>todo</Link>
                <Link to={'/'}>all</Link>
            </header>
        </div>
    </BrowserRouter>;
}

export default App;
