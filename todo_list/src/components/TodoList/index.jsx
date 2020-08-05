import React from "react";
import Todo from "../Todo"
import axiosInstance from '../../utils/MyAxios'
import axios from 'axios'

class todoList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        // axiosInstance.get("/todos").then((response) => {

        //     response.data.forEach((value, index) => {
        //         console.log("get sucesssss" + response.data)
        //     })
        // }
        // )

        if (this.props.todoList.addTodo.length===0) {
            axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then(response => {
                // console.log(response.data)
                response.data.forEach((value, index) => {
                    this.props.addTodo(value);
                })
            })
        }

    }

    todoStatusChange = (index) => {
        
        this.props.updateTodoStatus(index);
        let id = this.props.todoList.addTodo[index].id;
        axiosInstance.put("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+id,this.props.todoList.addTodo[index])
        .then(res=>{
            console.log("更新成功",res.data)
        })
        console.log(this.props.todoList.addTodo[index]);
        // axiosInstance.post('https://5e9ec500fb467500166c4658.mockapi.io/todos',)
        // this.forceUpdate();
    }

    handleTodoDelete = (index) => {
        let id = this.props.todoList.addTodo[index].id;
        axiosInstance.delete("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+id)
        .then(res=>{
            console.log("delete ok",res.data,res.status);
        })
        this.props.deleteTodo(index);
        // this.forceUpdate();
    }

    render() {
        let path = document.URL.substring(document.URL.lastIndexOf('/') + 1);
        
        if (path === 'done') {
            return this.props.todoList.addTodo.map(((value, index) => {
                if (value.status === false) {
                    return <div key={"2" + index}>
                        <s><Todo key={index} onClick={this.todoStatusChange} handleTodoDelete={this.handleTodoDelete}
                            index={index} text={value.content} />
                        </s>
                    </div>
                }
            }));
        }

        if (path === 'todo') {
            return this.props.todoList.addTodo.map(((value, index) => {
                if (value.status === true) {
                    return <div key={"2" + index}>
                        <Todo key={index} onClick={this.todoStatusChange} handleTodoDelete={this.handleTodoDelete}
                            index={index} text={value.content} />
                    </div>
                }
            }));
        }
        return this.props.todoList.addTodo.map(((value, index) => {
            if (value.status === false) {
                return <div key={"2" + index}>
                    <s><Todo key={index} onClick={this.todoStatusChange} handleTodoDelete={this.handleTodoDelete}
                        index={index} text={value.content} />
                    </s>
                </div>
            }
            else {
                return <div key={"2" + index}>
                    <Todo key={index} onClick={this.todoStatusChange} handleTodoDelete={this.handleTodoDelete}
                        index={index} text={this.props.todoList.addTodo[index].content} />
                </div>
            }

        }
        ))

        return "1";
    }
}

export default todoList