import { Button } from "../UI/index";
import style from "./TodoList.module.css";

type TodoType = {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
};

type PropsType = {
  todos: TodoType[] | null;
  completeHandler?: (id: number) => void;
  removeTodoHandler?: (id: number) => void;
};

export const TodoList = ({
  todos,
  removeTodoHandler,
  completeHandler,
}: PropsType) => {
  if (!todos) return <h3>loading</h3>;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? style.complete : ""}>
          {todo.title}
          <Button
            title="Complete"
            action={() => {
              if (completeHandler) completeHandler(todo.id);
            }}
          />
          <Button
            title="Delete"
            action={() => {
              if (removeTodoHandler) removeTodoHandler(todo.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
