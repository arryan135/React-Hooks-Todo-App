import React, {createContext, useReducer} from "react";
import todoReducer from "../reducers/todo.reducer.js"
import useLocalStorageReducer from "../Hooks/useLocalStorageReducer"

const defaultTodos = [
    {id: 1, task: "Mow the lawn using goats", completed: false},
    {id: 2, task: "Release lady bugs into the garden", completed: false}
];

const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props){
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        <TodosContext.Provider value = {todos}>
            <DispatchContext.Provider value = {dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export {TodosContext, TodosProvider, DispatchContext};