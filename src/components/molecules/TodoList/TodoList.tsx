import { useSelector } from "react-redux";
import { Task } from "../../../types/Task";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import { sortedTodoListSelector } from "../../../redux/selectors/todoSelector";
import "./TodoList.scss";

export const TodoList = () => {
  const todoList = useSelector(sortedTodoListSelector);

  return (
    <div className="list">
      {todoList.map((task: Task) => (
        <TodoListItem key={task.id} task={task} />
      ))}
    </div>
  );
};
