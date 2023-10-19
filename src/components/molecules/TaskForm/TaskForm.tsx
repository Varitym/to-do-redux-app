import { useState } from "react";
import { TextInput } from "../../atoms/TextInput/TextInput";
import { Button } from "../../atoms/Button/Button";
import "./TaskForm.scss";

type Props = {
  onFormSubmit: (data: string) => void;
  defaultValue?: string;
  icon: React.ReactNode;
};

export const TaskForm = ({ onFormSubmit, defaultValue, icon }: Props) => {
  const [isValid, setIsValid] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onFormSubmit(data.get("task") as string);
    event.currentTarget.reset();
    setIsValid(false);
  };
  const isFormValid = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const inputValue = data.get("task") as string;
    if (inputValue.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form className="addForm" onSubmit={onSubmit} onChange={isFormValid}>
      <label htmlFor="task" className="hiddenLabel">
        Task
      </label>
      <TextInput
        id="task"
        name="task"
        placeholder="Add a new task"
        defaultValue={defaultValue}
      />
      <Button
        aria-label="task"
        type="submit"
        colorType={isValid || defaultValue ? "success" : "disabled"}
        disabled={!isValid && !defaultValue}
        icon={icon}
      />
    </form>
  );
};
