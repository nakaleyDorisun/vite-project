import { createSlice } from "@reduxjs/toolkit";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [] as TodoType[],
  reducers: {
    addTodo: (state, action) => {
      if (action.payload) {
        state.push({
          id: Date.now(),
          title: action.payload,
          completed: false,
        });
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.completed };
        } else {
          return todo;
        }
      });
    },
  },
});

const { reducer } = todoListSlice;
export const { addTodo, removeTodo, completeTodo } = todoListSlice.actions;
export default reducer;
