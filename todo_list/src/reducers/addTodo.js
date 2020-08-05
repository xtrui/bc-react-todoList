export const addTodo = (todoList = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...todoList, action.todo];
        case "DELETE_TODO":
            todoList.splice(action.index, 1);
            return [...todoList];
        case "UPDATE_STATUS":
            todoList[action.index].status = todoList[action.index].status  ? false : true;
            return [...todoList];

        default:
            return todoList;
    }
};