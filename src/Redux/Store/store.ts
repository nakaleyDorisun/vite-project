import { configureStore } from "@reduxjs/toolkit";
import reducerTodo from "../slices/todoListSlice";
import reducerBeers from "../slices/beerSlice";

export const store = configureStore({
  reducer: {
    todos: reducerTodo,
    beers: reducerBeers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
