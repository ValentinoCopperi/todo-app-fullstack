import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

export default function EditModal({ viewTodo, setViewTodo, selectedViewTodo, setSelectedViewTodo }) {

    

    const handleClose = () => {
        setViewTodo(false);
        setSelectedViewTodo(null);
    };



    return (
        <div>
            <Modal
                open={viewTodo}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        {selectedViewTodo.todo}
                    </Typography>
                    <div>
                        <div className='py-1'>
                            <h5 className='font-semibold'>Description:</h5>
                            <p className='break-words'>{selectedViewTodo.description}</p>
                        </div>
                        <div className='py-1'>
                            <h5 className='font-semibold'>Date:</h5>
                            <p>{selectedViewTodo.date}</p>
                        </div>
                        <div className='py-1'>
                            <h5 className='font-semibold'>Category:</h5>
                            <p>{selectedViewTodo.category}</p>
                        </div>
                        <div className='py-1'>
                            <h5 className='font-semibold'>Completed:</h5>
                            <p>{selectedViewTodo.status ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
