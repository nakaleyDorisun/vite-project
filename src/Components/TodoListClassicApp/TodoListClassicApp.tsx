import { useState } from "react";
import { Button, Input } from "../UI/index";
import { TodoList } from "../TodoList/TodoList";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export const TodoListClassicApp = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [value, setValue] = useState("");

  console.log("classic render");
  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodoHandler = (id: number) => {
    console.log("removeTodoHandler");

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeHandler = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TodoListClassicApp</h1>
      <Input value={value} getValue={setValue} />
      <Button title="Add Classic Todo" action={addTodoHandler} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          completeHandler={completeHandler}
          removeTodoHandler={removeTodoHandler}
        />
      ) : (
        <p>нет задач</p>
      )}
    </div>
  );
};
