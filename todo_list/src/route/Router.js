import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import TodoListContainer from '../components/TodoListContainner'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={TodoListContainer}/>
            <Route exact path="/detail" component={TodoListContainer}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;