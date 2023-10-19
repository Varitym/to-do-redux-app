import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/slices/todoListSlice";
import { Todo } from "../../../types/Todo";
import { TaskForm } from "../TaskForm/TaskForm";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const AddTask = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: Todo) => state.todo);

  const onSubmit = (task: string) => {
    dispatch(
      addTodo({
        task: task,
        id: todoList.length + 1,
        status: "todo",
      })
    );
  };

  return <TaskForm onFormSubmit={onSubmit} icon={<AiOutlinePlusCircle />} />;
};
