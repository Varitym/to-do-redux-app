import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";

const initialState: Task[] = [];

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: Task[], action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.status = action.payload.status;
        todo.task = action.payload.task;
      }
    },
  },
});

const { actions } = todoListSlice;

export const { addTodo, removeTodo, updateTodo } = actions;
