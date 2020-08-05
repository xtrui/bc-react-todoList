import React from 'react';
import './App.css';
import Layout from './components/Layout'

function App() {
    return <Layout></Layout>


    // <BrowserRouter><div className="App">
    //     <Layout></Layout>
    //         <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo"/>
    //             <h2>TodoList</h2>
    //             <Route exact path="/" component={TodoListContainer} />
    //             <Route exact path="/" component={TodoFormContainer} />
    //             <Route path="/done" component={TodoListContainer} />
    //             <Route path="/todo" component={TodoListContainer} />
    //             {/*<TodoFormContainer/>*/}
    //             <Link to={'/done'}>done</Link>
    //             <Link to={'/todo'}>todo</Link>
    //             <Link to={'/'}>all</Link>
    //         </header>
    //     </div>
    // </BrowserRouter>;
}

export default App;
