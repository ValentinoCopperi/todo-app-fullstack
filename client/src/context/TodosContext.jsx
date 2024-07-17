import { createContext, useContext, useEffect, useState } from "react";
import { getTodos, getTodosCompleted } from "../services/todosServices";


export const TodosContext = createContext();

export function TodosContextProvider({children}){

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const[selectedFilter,setSelectedFilter] = useState(null);

    const handleSelectedFilter = (filter) => {
        filter === "All" ? setSelectedFilter(null) : setSelectedFilter(filter)
    }

    useEffect(() => {
        getTodos().then(data => {
            setTodos(data);
            setLoading(false);
        });
    }, []);

    const totalTodo = todos.length;
    const totalCompleted = getTodosCompleted(todos);
    const totalUndone = totalTodo - totalCompleted;
    const percentage = totalTodo !== 0 ? (totalCompleted / totalTodo) * 100 : 0

    return (
        <TodosContext.Provider value={{todos,totalTodo,totalCompleted,totalUndone,percentage,loading,handleSelectedFilter,selectedFilter}}>
            {children}
        </TodosContext.Provider>
    )
}

export function useTodosContext(){
    return useContext(TodosContext)
}