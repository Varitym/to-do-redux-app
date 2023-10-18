import { useSelector } from "react-redux";
import { Task } from "../types/Task";
import { TodoListItem } from "./TodoListItem";
import { sortedTodoListSelector } from "../redux/selectors/todoSelector";

export const TodoList = () => {
  const todoList = useSelector(sortedTodoListSelector);

  return (
    <ul>
      {todoList.map((task: Task) => (
        <TodoListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
