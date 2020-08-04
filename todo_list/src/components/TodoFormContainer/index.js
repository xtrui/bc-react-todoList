import {connect} from "react-redux";
import TodoForm from "../TodoForm"
import {addTodo} from "../../actions"

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoForm)