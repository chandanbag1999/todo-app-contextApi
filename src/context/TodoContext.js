import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
        id : 1,
        todo: "todoMsg",
        completed : false
    },
],
    
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
})

export const Todoprovider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}