import {connect} from "react-redux";
import TodoList from "../TodoList"
import {updateTodoStatus,deleteTodo,addTodo} from "../../actions";


const mapStateToProps = todoList => ({
    todoList: todoList,
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (index) => dispatch(deleteTodo(index)),
    updateTodoStatus:(index)=>dispatch(updateTodoStatus(index)),
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)