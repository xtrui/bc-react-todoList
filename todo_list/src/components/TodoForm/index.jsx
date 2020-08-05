import * as React from "react";
import axios from '../../utils/MyAxios'

class todoForm extends React.Component {


    constructor(props) {
        super(props);
    }

    addTodo = () => {
        let text = document.getElementById("inputBox").value;
        // let id = Number(Math.random().toString().substr(3,10) + Date.now()).toString(36);
        let todo = {content:text,status:true};
        axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos",todo)
        .then(response=>{
            this.props.addTodo(response.data);
        })
    }

    render() {
        return <div>
            <input type="text" id="inputBox"/>
            <button onClick={this.addTodo}>add</button>
        </div>

    }
}

export default todoForm;