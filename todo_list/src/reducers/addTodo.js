const addTodo = (todoList = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return todoList.push(action.text);
        default:
            return todoList;
    }
};