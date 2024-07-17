import React from 'react'
import { categories } from './../../libs/Categories';
import { useTodosContext } from '../../context/TodosContext';

export default function FilterTodosCategory() {

    const {handleSelectedFilter,selectedFilter} = useTodosContext();
    console.log(selectedFilter)

    return (
        <div>
            <select
                onChange={(e)=>handleSelectedFilter(e.target.value)}
                className="cursor-pointer px-3 relative py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
            >   
                <option value="All">All</option>
                {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
        </div>
    )
}
