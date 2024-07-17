import React, { useEffect, useState } from 'react'
import CompletedTable from '../components/completed/CompletedTable'
import { getTodos } from '../services/todosServices';

export default function CompletedTodo() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
      getTodos().then(data => setTodos(data.filter(item => item.status === true)))
  }, [])

  return (
    <div>
       <h1 className='text-3xl sm:text-3xl font-bold text-center md:text-left'>Completed Todo</h1>

       <div>
          <CompletedTable todos={todos}/>
       </div>
    </div>
  )
}
