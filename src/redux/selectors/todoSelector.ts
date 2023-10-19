import { createSelector } from "reselect";
import { Todo } from "../../types/Todo";

const todoList = (state: Todo) => state.todo;

export const sortedTodoListSelector = createSelector([todoList], (todoList) => {
  return [...todoList].sort((a, b) => {
    if (a.status === "done" && b.status !== "done") {
      return 1;
    }
    if (a.status !== "done" && b.status === "done") {
      return -1;
    }
    return 0;
  });
});
