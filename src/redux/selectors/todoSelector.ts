import { createSelector } from "reselect";
import { Todo } from "../../types/Todo";

const selectTodoList = (state: Todo) => state.todo;

export const sortedTodoListSelector = createSelector(
  [selectTodoList],
  (todoList) => {
    return [...todoList].sort((a, b) => {
      if (a.status === "done" && b.status !== "done") {
        return 1;
      } else if (a.status !== "done" && b.status === "done") {
        return -1;
      } else {
        return 0;
      }
    });
  }
);
