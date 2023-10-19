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

  const handleEdit = () => {
    if (editedTask) {
      dispatch(
        updateTodo({
          id: task.id,
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
    setEditedTask({ ...editedTask, task: event.target.value });
  };

  const startEditing = () => {
    setIsEditing(true);
    setEditedTask(task);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <TextInput value={editedTask.task} onChange={handleEditInput} />
          <Button
            onClick={handleEdit}
            text="Save"
            color="gray"
            icon={<AiFillCheckSquare />}
          />
        </div>
      ) : (
        <div>
          <input
            className="checkbox"
            type="checkbox"
            onChange={handleCheckbox}
            checked={task.status === "done"}
          />
          <div className={task.status}>{task.task}</div>
          <Button
            onClick={startEditing}
            text="Edit"
            color="gray"
            icon={<AiFillEdit />}
          />
          <Button
            onClick={() => handleDelete(task.id)}
            text="Delete"
            color="gray"
            icon={<BsFillTrash3Fill />}
          />
        </div>
      )}
    </div>
  );
};
