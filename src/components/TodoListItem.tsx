import { useDispatch } from "react-redux";
import { Task } from "../types/Task";
import { removeTodo, updateTodo } from "../redux/slices/todoListSlice";
import { useState } from "react";
import { Button } from "./Button";
import { AiFillCheckSquare, AiFillEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { TextInput } from "./TextInput";

type Props = {
  task: Task;
};

export const TodoListItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>({
    task: "",
    id: 0,
    status: "todo",
  });

  const handleDelete = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  const handleEdit = (id: number) => {
    if (editedTask) {
      dispatch(
        updateTodo({
          id: id,
          status: editedTask.status,
          task: editedTask.task,
        })
      );
    }
    setIsEditing(false);
  };

  const handleCheckbox = () => {
    dispatch(
      updateTodo({
        id: task.id,
        status: task.status === "todo" ? "done" : "todo",
        task: task.task,
      })
    );
  };

  const handleEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({ ...task, task: event.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <div className="task">
          <TextInput value={editedTask?.task} onChange={handleEditInput} />
          <Button
            onClick={() => handleEdit(task.id)}
            text={"Save"}
            color="gray"
            icon={<AiFillCheckSquare />}
          />
        </div>
      ) : (
        <div className="task">
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => {
              handleCheckbox();
            }}
            value={task.status === "done" ? "checked" : ""}
          ></input>
          <div className={task.status}>{task.task}</div>
          <Button
            onClick={() => {
              setIsEditing(true);
              setEditedTask(task);
            }}
            text={"Edit"}
            color="gray"
            icon={<AiFillEdit />}
          />

          <Button
            onClick={() => handleDelete(task.id)}
            text={"Delete"}
            color="gray"
            icon={<BsFillTrash3Fill />}
          />
        </div>
      )}
    </div>
  );
};
