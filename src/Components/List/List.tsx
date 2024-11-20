import { IBeers } from "../../data/beers";
import { Button } from "../UI/index";
import style from "./List.module.css";

type TodoType = {
  userId?: number;
  id: number;
  title: string;
  completed?: boolean;
  isInStock?: boolean;
};

type PropsType = {
  items: TodoType[] | IBeers[] | null;
  completeHandler?: (id: number) => void;
  removeTodoHandler?: (id: number) => void;
};

export const List = ({
  items,
  removeTodoHandler,
  completeHandler,
}: PropsType) => {
  if (!items) return <h3>loading</h3>;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={item.completed ? style.complete : ""}>
          {item.title}
          <Button
            title="Complete"
            action={() => {
              if (completeHandler) completeHandler(item.id);
            }}
          />
          <Button
            title="Delete"
            action={() => {
              if (removeTodoHandler) removeTodoHandler(item.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
