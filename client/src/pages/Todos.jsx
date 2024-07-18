import React, { useEffect, useState } from 'react'
import BoxData from '../components/todos/BoxData'
import { getTodos, getTodosCompleted } from '../services/todosServices';
import Sidebar from '../components/ui/Sidebar';
import TodosTable from '../components/todos/TodosTable';
import FilterTodosCategory from '../components/todos/FilterTodos';
import { useTodosContext } from '../context/TodosContext';
import Footer from '../components/ui/Footer';

export default function Home() {

   
    const { todos,totalTodo,totalCompleted,totalUndone,percentage,loading } = useTodosContext();


    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <h1 className='text-6xl'>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <div>
                <h1 className='text-3xl sm:text-3xl font-bold text-center md:text-left'>Dashboard</h1>

                <div className='flex items-center justify-center flex-wrap py-10'>
                    <BoxData
                        title="Total Todo Items"
                        quantity={totalTodo}
                        bg="rgb(41,135,73)  linear-gradient(138deg, rgba(41,135,73,0.9037990196078431) 35%, rgba(34,144,70,0.8981967787114846) 55%)"
                        textcolor="#00fb1e"
                    />
                    <BoxData
                        title="Todo Items Completed"
                        quantity={totalCompleted}
                        bg="rgb(162,52,180) linear-gradient(138deg, rgba(162,52,180,0.9542191876750701) 35%, rgba(128,19,122,0.8981967787114846) 49%)"
                        textcolor="#f600fb"
                    />
                    <BoxData
                        title="Todo Items Undone"
                        quantity={totalUndone}
                        bg="rgb(92,139,209) linear-gradient(138deg, rgba(92,139,209,0.9542191876750701) 35%, rgba(70,155,201,0.8981967787114846) 49%)"
                        textcolor="#00d1fb"
                    />
                    <BoxData
                        title="Percentage Items Completed"
                        quantity={'%' + percentage.toFixed(1)}
                        bg="rgb(167,198,65) linear-gradient(138deg, rgba(167,198,65,0.9542191876750701) 35%, rgba(164,189,62,1) 49%)"
                        textcolor="#c9fb00"
                    />
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-semibold'>Filters:</h1>
                <div className='flex py-3'>
                    <div className='flex items-center'>
                        <h3>By category</h3>
                        <FilterTodosCategory />
                    </div>
                    
                </div>

            </div>
            <TodosTable />

            <Footer/>
            
        </>
    );
}
