import { useState } from "react";
import {
  addTodo,
  removeTodo,
  completeTodo,
} from "../../Redux/slices/todoListSlice";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hooks";
import { TodoList } from "../TodoList/TodoList";

export const TodoListReduxApp = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

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
      <Button title="Add Redux Todo" action={() => dispatch(addTodo(value))} />
      {state.length > 0 ? (
        <TodoList
          removeTodoHandler={removeTodoHandler}
          completeHandler={completeHandler}
          todos={state}
        />
      ) : (
        <p>нет задач</p>
      )}
    </div>
  );
};
