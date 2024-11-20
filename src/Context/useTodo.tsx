import { useContext } from "react";
import { TodoListContext, TodoListContextType } from "./TodoListContext";

export const useTodo = () => {
  const todoListContext = useContext(TodoListContext) as TodoListContextType;

  return todoListContext;
};
