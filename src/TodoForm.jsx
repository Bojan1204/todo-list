import React from "react";
import Paper from "@material-ui/core/Paper";
import TextFiled from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

const TodoForm =({addTodo})=>{
    const [value, handleChange, reset] = useInputState("")

    return(
    <Paper style={{margin: "1rem 0", padding:"0 1rem"}}>
       <form onSubmit={(e)=>{
           e.preventDefault();
           addTodo(value); 
           reset();
       }}>
       <TextFiled
        value={value}
        onChange={handleChange} 
         margin='normal'
         label="Add New Todo"
         fullWidth
         />
     </form>
    </Paper>
       
    )
}

export default TodoForm;