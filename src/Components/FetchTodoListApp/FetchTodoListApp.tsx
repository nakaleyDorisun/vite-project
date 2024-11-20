import { useEffect, useState } from "react";
import { TodoList } from "../TodoList/TodoList";
import { Button } from "../UI";

type FetchDataType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export const FetchTodoListApp = () => {
  const [todos, setTodos] = useState<FetchDataType[]>([]);
  const [showTodo, setShowTodo] = useState(false);

  const buttonValueToggle = showTodo ? "Скрыть" : "Показать";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const completeHandler = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodoHandler = (id: number) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div>
      <h1>TodoListFetchApp</h1>
      <Button action={() => setShowTodo((p) => !p)} title={buttonValueToggle} />
      {showTodo && (
        <TodoList
          todos={todos}
          completeHandler={completeHandler}
          removeTodoHandler={deleteTodoHandler}
        />
      )}
    </div>
  );
};
