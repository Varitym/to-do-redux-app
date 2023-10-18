import { useDispatch } from "react-redux";
import { Task } from "../types/Task";
import { removeTodo, updateTodo } from "../redux/slices/todoListSlice";
import { useState } from "react";

type Props = {
  task: Task;
};

export const TodoListItem = ({ task }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>({
    task: "",
    id: 0,
    status: "todo",
  });

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  const handleEdit = (id: number, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <div className={"task"}>
      {isEditing ? (
        <div>
          <form onSubmit={(e) => handleEdit(task.id, e)}>
            <input
              type="text"
              value={editedTask?.task}
              onChange={(e) => setEditedTask({ ...task, task: e.target.value })}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div className="task">
          <li className={task.status}>{task.task}</li>
          <div className="status">{task.status}</div>
          <div
            className="delete"
            onClick={() => {
              setIsEditing(true);
              setEditedTask(task);
            }}
          >
            Edit
          </div>
          <input
            type="checkbox"
            onChange={() => {
              handleCheckbox();
            }}
            value={task.status === "done" ? "checked" : ""}
          ></input>
          <div className="delete" onClick={() => handleDelete(task.id)}>
            X
          </div>
        </div>
      )}
    </div>
  );
};
