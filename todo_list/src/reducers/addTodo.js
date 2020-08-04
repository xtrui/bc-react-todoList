let todo ={text:"", status:0};
export const addTodo = (todoList = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...todoList,{status:0,text: action.text}];
        case "DELETE_TODO":
            todoList.splice(action.index,1);
            return todoList;
        case "UPDATE_STATUS":
            todoList[action.index].status=todoList[action.index].status===1?0:1;
            return todoList;

        default:
            return todoList;
    }
};