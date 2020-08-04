import React from "react";
import Todo from "../Todo"

class todoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.todoList.addTodo.length)
        return new Array(this.props.todoList.addTodo.length).fill(0).map(((value, index) =>
                <Todo key={index} text={this.props.todoList.addTodo[index]}/>
        ))
    }
}

export default todoList