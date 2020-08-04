import {connect} from "react-redux";
import TodoList from "../TodoList"

const mapStateToProps = todoList => ({
    todoList: todoList,
});

export default connect(mapStateToProps)(TodoList)