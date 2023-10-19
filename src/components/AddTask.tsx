import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoListSlice";
import { Todo } from "../types/Todo";
import { Button } from "./Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TextInput } from "./TextInput";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state: Todo) => state.todo);

  const onSubmit = () => {
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
    <div className="row">
      <TextInput value={task} onChange={handleChange} />
      <Button
        text="Add"
        color={"gray"}
        isDisabled={task.length < 1}
        icon={<AiOutlinePlusCircle />}
        onClick={onSubmit}
      />
    </div>
  );
};
