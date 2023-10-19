import { useDispatch } from "react-redux";
import { Task } from "../../../types/Task";
import { removeTodo, updateTodo } from "../../../redux/slices/todoListSlice";
import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { AiFillCheckSquare, AiFillEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./TodoListItem.scss";
import { TaskForm } from "../TaskForm/TaskForm";

type Props = {
  task: Task;
};

export const TodoListItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  const handleEdit = (data: string) => {
    dispatch(
      updateTodo({
        id: task.id,
        status: task.status,
        task: data,
      })
    );
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
    <div className="container">
      {isEditing ? (
        <div className="container__task">
          <TaskForm
            onFormSubmit={handleEdit}
            defaultValue={task.task}
            icon={<AiFillCheckSquare />}
          />
        </div>
      ) : (
        <div className="container__task">
          <p className={`container__text container__text--${task.status}`}>
            {task.task}
          </p>
          <div className="container__actions">
            <input
              className="container__checkbox"
              type="checkbox"
              onChange={() => {
                handleCheckbox();
              }}
              value={task.status === "done" ? "checked" : ""}
            ></input>
            {task.status !== "done" && (
              <Button
                onClick={() => {
                  setIsEditing(true);
                }}
                colorType="warning"
                icon={<AiFillEdit />}
              />
            )}
            <Button
              onClick={() => handleDelete(task.id)}
              colorType={"error"}
              icon={<BsFillTrash3Fill />}
            />
          </div>
          {task.status === "todo" && <div className={`container__mark`}></div>}
        </div>
      )}
    </div>
  );
};
