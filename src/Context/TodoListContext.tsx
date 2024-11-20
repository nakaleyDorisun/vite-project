import { SetStateAction, createContext, useState } from "react";

type TodoListContextProviderProps = {
  children: React.ReactNode;
};

type TodoListType = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoListContextType = {
  todoList: TodoListType[];
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  addTodoHandler: () => void;
  removeTodoHandler: (id: number) => void;
  completeTodoHandler: (id: number) => void;
};

export const TodoListContext = createContext<TodoListContextType | null>(null);

export const TodoListContextProvider = ({
  children,
}: TodoListContextProviderProps) => {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);
  const [value, setValue] = useState("");

  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodoList([
        ...todoList,
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
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const completeTodoHandler = (id: number) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        value,
        setValue,
        addTodoHandler,
        removeTodoHandler,
        completeTodoHandler,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
