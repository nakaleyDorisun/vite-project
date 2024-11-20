import { Button, Input } from "../UI/index";
import { TodoList } from "../TodoList/TodoList";
import { useTodo } from "../../Context/useTodo";
export const TodoListContextApp = () => {
  console.log("context render");

  const {
    value,
    setValue,
    todoList,
    addTodoHandler,
    removeTodoHandler,
    completeHandler,
  } = useTodo();

  return (
    <div>
      <h1>TodoListContextApp</h1>
      <Input getValue={setValue} value={value} />
      <Button title="Add Context Todo" action={addTodoHandler} />
      {todoList.length > 0 ? (
        <TodoList
          todos={todoList}
          removeTodoHandler={removeTodoHandler}
          completeHandler={completeHandler}
        />
      ) : (
        <p>нет задач</p>
      )}
    </div>
  );
};