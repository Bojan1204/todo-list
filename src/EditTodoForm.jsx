import React from 'react';
import TextFiled from "@material-ui/core/TextField";
import useInputState from './hooks/useInputState';

const EditTodoForm=({editTodo, id, task, toggleEditForm})=>{
    const [value, handleChange, reset] = useInputState(task);
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            editTodo(id , value);
            reset();
            toggleEditForm();
        }}> 
        <TextFiled margin="normal" value={value} onChange={handleChange} fullWidth/>
        </form>
    )
}

export default EditTodoForm;