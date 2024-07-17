import axios from 'axios';


export async function getTodos ()  {
    return axios.get("http://localhost:5000/api/todos")
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      return [];
    });
}

export function createTodo(item) {
  return axios.post("http://localhost:5000/api/todos",item)
}

export function getTodosCompleted (todos) {
    const todosCompleted = todos.filter(todo => todo.status === true)
    return todosCompleted.length || 0
}

export function completedTodo (id) {
  return axios.put(`http://localhost:5000/api/todos/completed/${id}`)
}

export function deletedTodo(id){
  return axios.delete(`http://localhost:5000/api/todos/${id}`)
}
export function updatedTodo(item){
  return axios.put(`http://localhost:5000/api/todos/${item._id}`,{item})
}


