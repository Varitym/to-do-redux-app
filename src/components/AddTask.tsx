import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoListSlice";
import { Todo } from "../types/Todo";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state: Todo) => state.todo);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTodo({
        task: task,
        id: todoList.length + 1,
        status: "todo",
      })
    );
    setTask("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
