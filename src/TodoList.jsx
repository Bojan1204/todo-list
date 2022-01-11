import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <Paper>
        <List> 
      {props.todos.map((todo) => (
          <> 
        <ListItemText>
          <Todo task={todo.task} key={todo.id} completed={completed}/>
        </ListItemText>
        <Divider/>
        </>
      ))}
      </List>
    </Paper>
  );
};

export default TodoList;
