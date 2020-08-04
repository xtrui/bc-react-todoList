export const addTodo = text => ({
    type: 'ADD_TODO',
    text
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