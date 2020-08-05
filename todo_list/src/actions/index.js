export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo:todo
});

export const deleteTodo = index =>(
    {
        type:'DELETE_TODO',
        index
    }
)

export const  updateTodoStatus= index =>(
    {
        type:'UPDATE_STATUS',
        index
    }
)