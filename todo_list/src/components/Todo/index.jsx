import * as React from "react";

class todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleClick=()=>{
        this.props.onClick(this.props.index)
    }
    handleTodoDelete=()=>{
        this.props.handleTodoDelete(this.props.index)
    }
    render() {
        return <span><span onClick={this.handleClick}>{this.props.text}</span> <button onClick={this.handleTodoDelete}>X</button></span>
    }
}

export default todo