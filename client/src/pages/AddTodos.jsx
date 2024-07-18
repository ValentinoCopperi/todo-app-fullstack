import React from 'react'
import FormTodo from '../components/add/FormTodo'
import Footer from '../components/ui/Footer'

export default function AddTodos() {
  return (
    <div>
       <h1 className='text-3xl sm:text-3xl font-bold text-center md:text-left'>Add Todo</h1>

       <div>
          <FormTodo/>
       </div>

       <Footer/>
    </div>
  )
}
