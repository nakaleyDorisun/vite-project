import { useState } from "react";
import {
  addTodo,
  removeTodo,
  completeTodo,
} from "../../Redux/slices/todoListSlice";

import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hooks";
import { List } from "../List/List";

export const TodoListReduxApp = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.todos);

  const addTodoHandler = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const removeTodoHandler = (id: number) => {
    dispatch(removeTodo(id));
  };

  const completeHandler = (id: number) => {
    dispatch(completeTodo(id));
  };

  console.log("redux render");

  return (
    <div>
      <h1>TodoListReduxApp</h1>
      <Input value={value} getValue={setValue} />
      <Button title="Add Redux Todo" action={addTodoHandler} />
      {state.length > 0 ? (
        <List
          removeTodoHandler={removeTodoHandler}
          completeHandler={completeHandler}
          items={state}
        />
      ) : (
        <p>нет задач</p>
      )}
    </div>
  );
};
