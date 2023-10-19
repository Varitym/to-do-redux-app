import { render, screen, fireEvent } from "@testing-library/react";
import { TaskForm } from "../components/molecules/TaskForm/TaskForm";
import { AiFillCheckSquare } from "react-icons/ai";

test("renders the TaskForm with the provided icon", () => {
  const onFormSubmit = jest.fn();
  render(
    <TaskForm
      onFormSubmit={onFormSubmit}
      icon={<div data-testid="icon">Icon</div>}
    />
  );
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
});

test("submits the form with the entered task", () => {
  const onFormSubmit = jest.fn();
  render(<TaskForm icon={<AiFillCheckSquare />} onFormSubmit={onFormSubmit} />);
  const input = screen.getByLabelText("Task");
  const submitButton = screen.getByRole("button", { name: "task" });

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(submitButton);

  expect(onFormSubmit).toHaveBeenCalledWith("New Task");
});

test("disables the submit button when the input is empty", () => {
  const onFormSubmit = jest.fn();
  render(<TaskForm icon={<AiFillCheckSquare />} onFormSubmit={onFormSubmit} />);
  const submitButton = screen.getByRole("button", { name: "task" });

  expect(submitButton).toBeDisabled();
});

test("enables the submit button when the input has content", () => {
  const onFormSubmit = jest.fn();
  render(<TaskForm icon={<AiFillCheckSquare />} onFormSubmit={onFormSubmit} />);
  const input = screen.getByLabelText("Task");
  const submitButton = screen.getByRole("button", { name: "task" });

  fireEvent.change(input, { target: { value: "New Task" } });

  expect(submitButton).not.toBeDisabled();
});

test("renders with a default value if provided", () => {
  const onFormSubmit = jest.fn();
  render(
    <TaskForm
      icon={<AiFillCheckSquare />}
      onFormSubmit={onFormSubmit}
      defaultValue="Default Task"
    />
  );
  const input = screen.getByLabelText("Task");

  expect(input).toHaveValue("Default Task");
});
