import React, { useState } from 'react';
import { categories } from '../../libs/Categories';
import { createTodo } from '../../services/todosServices';

export default function FormTodo() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("Work Out")
    const[addTodoError,setAddTodoError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            todo: name,
            description,
            category,
            date: new Date()
        }

        createTodo(data).then(data => {
            data === 201 ? setAddTodoError(false) : setAddTodoError(true);
            setName('')
            setDescription('')
            
        })
       
    }
    
    return (
        <main className="w-full h-screen flex flex-col items-center  sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">

                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create A Todo Item</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                               required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Description
                            </label>
                            <textarea
                                value={description}
                                maxLength={100}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="w-full min-h-[150px] mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Category</label>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                            >

                                {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}

                            </select>
                        </div>
                        {
                            (addTodoError !== null && addTodoError === false) && (
                               <h1 className='font-semibold text-green-400'>Todo Added Correctly</h1>
                            )
                        }
                        <input
                            type='submit'
                            value="Create Todo"
                            className="w-full cursor-pointer  px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        />
                    </form>

                </div>
            </div>
        </main>
    )

}
