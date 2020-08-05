import * as React from "react";
import {Card} from "antd";
import {DeleteTwoTone} from '@ant-design/icons';

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
        return <Card
            style={{minWidth: "500px", opacity: 0.7, marginTop: "12px", marginBottom: "16px", fontSize: "24px"}}
            bodyStyle={{padding: '12px'}}><b><span onClick={this.handleClick}>{this.props.text}</span> </b>
            <button style={{float: 'right'}} onClick={this.handleTodoDelete}><DeleteTwoTone/></button>
        </Card>
    }
}

export default todo