import * as React from "react";

class todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return <span>{this.props.text}</span>
    }
}

export default todo