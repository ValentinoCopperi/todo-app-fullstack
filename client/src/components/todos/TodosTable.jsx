import React, { useContext, useEffect, useState } from 'react'
import { completedTodo, getTodos, deletedTodo } from '../../services/todosServices'
import classNames from 'classnames'
import EditModal from './EditModal';
import { categories } from '../../libs/Categories';
import ViewModal from './ViewModal';
import { useTodosContext } from '../../context/TodosContext';
export default function TodosTable() {

    const {todos,selectedFilter} = useTodosContext();
    const todosSort = todos.sort((a,b)=>a.status - b.status);

    const[modalOpen,setModalOpen] = useState(false);
    const[selectedTodo,setSelectedTodo] = useState(null)

    const[viewTodo,setViewTodo] = useState(false);
    const[selectedViewTodo,setSelectedViewTodo] = useState(null);

  
   
    const handleAction = (action, id , item = null) => {
        switch (action) {
            case "status":
                completedTodo(id);
                window.location.reload();
                break;
            case "delete":
                deletedTodo(id);
                window.location.reload();
                break;
            case "edit":
                setSelectedTodo(item)
                setModalOpen(true)
                break;
            case "view":
                setViewTodo(true)
                setSelectedViewTodo(item)
                break;
        }
    }



    return (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-4">Todo</th>
                        <th className="py-3 px-4">Description</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Completed</th>
                        <th className="py-3 px-4"></th>

                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y bg-gray-100">
                    {
                        todosSort
                        .filter((item) => {
                            return (
                                selectedFilter !== null ? item.category === selectedFilter : todosSort
                            )
                        })
                        .map((item, idx) => (
                            <tr key={idx} className={classNames({ 'bg-gray-300': item.status })}>
                                <td className={classNames("px-4 py-4 whitespace-nowrap font-semibold", { 'line-through': item.status })}>{item.todo}</td>
                                <td className="px-4 py-4 whitespace-nowrap overflox-auto max-w-xs truncate">{item.description}</td>
                                <td className="px-4 py-4 whitespace-nowrap font-bold" style={{color : categories[item.category]?.color}}>{item.category}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    {
                                        item.status ?
                                            <span className='text-green-600 font-medium'>Yes</span>
                                            :
                                            <span className='text-red-600 font-medium'>No</span>
                                    }
                                </td>
                                <td className="text-right px-4 whitespace-nowrap">
                                    <a onClick={()=>handleAction("view",item._id,item)} className="py-2 cursor-pointer px-3 font-medium text-orange-600 hover:text-orange-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        View
                                    </a>
                                    {
                                        !item.status && (
                                            <a onClick={() => handleAction("status", item._id)} className="cursor-pointer py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                Complete
                                            </a>
                                        )
                                    }
                                    <a onClick={()=>handleAction("edit",item._id,item)} className="py-2 cursor-pointer px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Edit
                                    </a>
                                    <a onClick={() => handleAction("delete", item._id)} className="cursor-pointer py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                {
                    modalOpen && (
                        <EditModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
                    )
                }
                {
                    viewTodo && (
                        <ViewModal viewTodo={viewTodo} setViewTodo={setViewTodo} selectedViewTodo={selectedViewTodo} setSelectedViewTodo={setSelectedViewTodo} />
                    )
                }
            </table>

        </div>
    )
}
