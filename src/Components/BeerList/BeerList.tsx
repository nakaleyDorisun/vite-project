import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hooks";
import { addBeer } from "../../Redux/slices/beerSlice";
import { Button } from "../UI";
import { TodoList } from "../TodoList/TodoList";

export const BeerList = () => {
  const [showBeers, setShowBeers] = useState(false);
  const isContentShowed = showBeers ? "Скрыть" : "Показать";
  const buttonValueToggle = () => setShowBeers((p) => !p);

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.beers);

  const addBeerHandler = () => {
    dispatch(addBeer("asdasdasdasd"));
    buttonValueToggle();
  };

  return (
    <div>
      <h1>Beer List</h1>
      <Button title={isContentShowed} action={addBeerHandler} />
      {showBeers && <TodoList todos={state} />}
    </div>
  );
};
