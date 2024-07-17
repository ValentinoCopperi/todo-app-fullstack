import React, { useEffect, useState } from 'react'


export default function CompletedTable({todos}) {
    return (

        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Todo</th>
                        <th className="py-3 px-6">Description</th>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Finished</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y bg-gray-100">
                    {
                       todos.length ?
                        todos.map((item, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold">{item.todo}</td>
                                <td className="px-4 py-4 whitespace-nowrap overflox-auto max-w-xs truncate">{item.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.status && "Yes"}</td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center">
                                No Completed Todos Found
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>

    )
}
