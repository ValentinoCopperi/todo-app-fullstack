import axios from 'axios';


export async function getTodos ()  {
    return axios.get("https://todo-app-fullstack-ihxi.onrender.com/api/todos")
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      return [];
    });
}

export function createTodo(item) {
  return axios.post("https://todo-app-fullstack-ihxi.onrender.com/api/add", item);
}

export function getTodosCompleted (todos) {
    const todosCompleted = todos.filter(todo => todo.status === true)
    return todosCompleted.length || 0
}

export function completedTodo (id) {
  return axios.put(`https://todo-app-fullstack-ihxi.onrender.com/api/todos/completed/${id}`)
}

export function deletedTodo(id){
  return axios.delete(`https://todo-app-fullstack-ihxi.onrender.com/api/todos/${id}`)
}
export function updatedTodo(item){
  return axios.put(`https://todo-app-fullstack-ihxi.onrender.com/api/todos/${item._id}`,{item})
}


