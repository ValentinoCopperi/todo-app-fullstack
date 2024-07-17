import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { updatedTodo } from '../../services/todosServices';
import { categories } from '../../libs/Categories';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditModal({ modalOpen, setModalOpen, selectedTodo, setSelectedTodo }) {

    const [todoName, setTodoName] = React.useState(selectedTodo.todo);
    const [todoDesc, setTodoDesc] = React.useState(selectedTodo.description);
    const [todoCat, setTodoCat] = React.useState(selectedTodo.category);
    const [todoStatus, setTodosStatus] = React.useState(selectedTodo.status);

    const handleClose = () => {
        setModalOpen(false);
        setSelectedTodo(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            _id: selectedTodo._id,
            todoName,
            todoDesc,
            todoCat,
            todoStatusUp: todoStatus
        };
        updatedTodo(data);
        window.location.reload();
    };

    const handleStatusChange = (e) => {
        setTodosStatus(e.target.value === "true");
    };

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Todo
                    </Typography>
                    <div className='py-3' id="modal-modal-description" sx={{ mt: 8 }}>
                        {selectedTodo && (
                            <form className='flex flex-col' onSubmit={handleSubmit}>
                                <div>
                                    <label>Edit Todo Name</label>
                                    <input
                                        onChange={(e) => setTodoName(e.target.value)}
                                        type='text'
                                        value={todoName}
                                        className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                    />
                                </div>

                                <div className='py-4'>
                                    <label>Edit Todo Description</label>
                                    <input
                                        onChange={(e) => setTodoDesc(e.target.value)}
                                        type='text'
                                        value={todoDesc}
                                        className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                    />
                                </div>

                                <div>
                                    <label className="font-medium">Category</label>
                                    <select
                                        
                                        value={todoCat}
                                        onChange={(e)=>setTodoCat(e.target.value)}
                                        className="w-full mt-2 px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                    >

                                        {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}

                                    </select>
                                </div>

                                <div className='py-4'>
                                    <label>Edit Todo Status</label>
                                    <select
                                        onChange={handleStatusChange}
                                        value={todoStatus ? "true" : "false"}
                                        className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                    >
                                        <option value={"true"}>Completed</option>
                                        <option value={"false"}>Undone</option>
                                    </select>
                                </div>

                                <input
                                    type='submit'
                                    value="Submit changes"
                                    className="cursor-pointer px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
                                />
                            </form>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
