import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const TodoList = (props) => {
 
    if(props.todos.length)
    return ( 
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo 
            id={todo.id}
            task={todo.task} 
            key={todo.id} 
            completed={todo.completed}
            removeTodo={props.removeTodo}
            toggleTodo={props.toggleTodo}
            editTodo={props.editTodo}
             />
        
             <Divider/>
          </>
        ))}
      </List>
    </Paper>
  );
  return null;
};

export default TodoList;
