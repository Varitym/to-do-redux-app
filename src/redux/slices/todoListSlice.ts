import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";

const initialState: Task[] = [{ id: 1, task: "Task 1", status: "todo" }];

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

const { actions } = todoListSlice;

export const { addTodo, removeTodo } = actions;
