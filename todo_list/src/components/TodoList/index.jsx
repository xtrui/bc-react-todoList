import React from "react";
import Todo from "../Todo"

class todoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListTexts: [
                'xxxxx',
                'yyyyy'
            ]
        }
    }

    render() {
        return new Array(this.state.todoListTexts.length).fill(0).map(((value, index) =>
                <Todo key={index} text={this.state.todoListTexts[index]}/>
        ))
    }
}

export default todoList