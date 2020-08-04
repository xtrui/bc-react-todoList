import React from "react";
import Todo from "../Todo"

class todoList extends React.Component {
    constructor(props) {
        super(props);
    }

    todoStatusChange = (index) => {
        this.props.updateTodoStatus(index);
        this.forceUpdate();
    }

    handleTodoDelete = (index) => {
        this.props.deleteTodo(index);
        this.forceUpdate();
    }

    render() {
        return new Array(this.props.todoList.addTodo.length).fill(0).map(((value, index) => {
                return <div key={"2" + index}>
                    <Todo key={index} onClick={this.todoStatusChange} handleTodoDelete={this.handleTodoDelete}
                          index={index} text={this.props.todoList.addTodo[index].text}/>
                </div>

            }
        ))
    }
}

export default todoList