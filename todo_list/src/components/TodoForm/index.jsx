import * as React from "react";
import axios from '../../utils/MyAxios'
import {Input} from 'antd';


class todoForm extends React.Component {


    constructor(props) {
        super(props);
    }

    addTodo = () => {
        let text = document.getElementById("inputBox").value;
        // let id = Number(Math.random().toString().substr(3,10) + Date.now()).toString(36);
        let todo = {content:text,status:true};
        axios.post("/", todo)
        .then(response=>{
            this.props.addTodo(response.data);
        })
    }

    render() {
        return <div>
            <Input placeholder="Basic usage" type="text" id="inputBox" style={{height: '60px'}}/>
            <button style={{marginTop: "12px", width: '80px', height: '60px', fontSize: '24px'}} onClick={this.addTodo}>
                <b>add</b></button>
        </div>

    }
}

export default todoForm;