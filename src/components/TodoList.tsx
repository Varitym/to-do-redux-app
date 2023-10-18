import { useSelector } from "react-redux";
import { Task } from "../types/Task";
import { Todo } from "../types/Todo";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const todoList = useSelector((state: Todo) => state.todo);

  const sortByStatus = (a: Task, b: Task) => {
    if (a.status === "done" && b.status !== "done") {
      return 1;
    } else if (a.status !== "done" && b.status === "done") {
      return -1;
    } else {
      return 0;
    }
  };

  const sortedTodos = [...todoList].sort(sortByStatus);

  return (
    <ul>
      {sortedTodos.map((task: Task) => (
        <TodoListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
